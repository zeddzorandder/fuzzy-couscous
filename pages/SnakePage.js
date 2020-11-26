import { Rectangle } from "../entities/Rectangle.js";
import { TextRender } from "../entities/TextRender.js";
import { Hexagon } from '../entities/Hexagon.js';
import { Polygon } from '../entities/Polygon.js';
import { Page } from "../gameLogic/Page.js";
import { Sprite } from "../entities/Sprite.js";
import * as iHandler from "../gameLogic/InputHandler.js";

export class SnakePage extends Page {

    constructor(lc, id) {
        super(lc, id);
        this.tails = [];
    }

    loadPage = () => {
        this.player = this.addPageEntity(new Rectangle("player", 700, 300, "yellow", 25, 25));
        this.exitLevel = this.addPageEntity(new Rectangle("exit", 600, 900, "purple", 50, 50));
       var x = 0; 
        this.player.properties.directions = [false, false, false, false];
        this.player.properties.speed = 25;
        this.gameSpeed = 5;

        this.player.properties.lastPosX = 700;
        this.player.properties.lastPosY = 300;
        this.food = [];

        this.walls = [];
        this.walls.push(this.addPageEntity(new Rectangle("wall1", 0, 0, "red", 25, 760)));
        this.walls.push(this.addPageEntity(new Rectangle("wall1", 1455, 0, "red", 25, 760)));
        this.walls.push(this.addPageEntity(new Rectangle("wall1", 0, 740, "red", 1480, 25)));
        this.walls.push(this.addPageEntity(new Rectangle("wall1", 0, 0, "red", 1480, 25)));
    }

    processPage = () => {

        if(this.food.length == 0){
            this.spawnFood();
        }

        this.player.properties.lastPosX = this.player.x;
        this.player.properties.lastPosY = this.player.y;

        if (this.logicContext.tick % this.gameSpeed == 0) {
            iHandler.snakeMovement(this.player);
            if (this.tails.length != 0) {
                this.tails[0].properties.lastPosX = this.tails[0].x;
                this.tails[0].properties.lastPosY = this.tails[0].y;
                this.tails[0].x = this.player.properties.lastPosX;
                this.tails[0].y = this.player.properties.lastPosY;
                for (let i = 1; i < this.tails.length; i++) {
                    this.tails[i].properties.lastPosX = this.tails[i].x;
                    this.tails[i].properties.lastPosY = this.tails[i].y;
                    this.tails[i].x = this.tails[i - 1].properties.lastPosX;
                    this.tails[i].y = this.tails[i - 1].properties.lastPosY;

                    if(this.collides2D(this.player, this.tails[i])){
                        for(let j = 0; j < this.tails.length; j++){
                            this.removePageEntity(this.tails[i]);
                        }
                        this.tails = [];
                        this.changePage("gameoverpage");
                    }
                }
            }
            for(let i = 0; i < this.walls.length; i++){
                if(this.collides2D(this.player, this.walls[i])){
                    for(let j = 0; j < this.tails.length; j++){
                        this.removePageEntity(this.tails[i]);
                    }
                    this.tails = [];
                    this.changePage("gameoverpage");
                }
            }
        }
        if (this.player.x < -20) {
            this.player.x = 1480;
        }
        if (this.player.x > 1480) {
            this.player.x = -20;
        }
        if (this.player.y < -30) {
            this.player.y = 730;
        }
        if (this.player.y > 730) {
            this.player.y = -30;
        }

        if(this.collides2D(this.player, this.food)){
            this.eatFood();
        }

        if(this.tails.length >= 5){
            this.exitLevel.y = 200;
        }

        if(this.collides2D(this.player, this.exitLevel)){
            this.changePage("snakepagelvl2", "playable");
        }

        for(let i = 0; i < this.tails.length; i++){
            if(i % 2 == 0){
                this.tails[i].color = "red";
            } else if( i % 3 == 0){
                this.tails[i].color = "green";
            } else {
                this.tails[i].color = "blue";
            }
        }
    }

    spawnFood = () => {
        let foodX = Math.floor(Math.random() * 1380 + 50);
        let foodY = Math.floor(Math.random() * 700 + 30);
        this.food = this.addPageEntity( new Rectangle("food", foodX, foodY, "green", 25, 25));
    }

    eatFood = () => {
        if(this.food.length == 0) return;
        this.removePageEntity(this.food.id);
        this.food = [];

        if(this.tails.length != 0){
            var tailX = this.tails[this.tails.length-1].x;
            var tailY = this.tails[this.tails.length-1].y;
        } else {
            var tailX = this.player.x;
            var tailY = this.player.y;
        }

        let newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);
        newTail = this.addPageEntity(new Rectangle(null, tailX, tailY, "red", this.player.width, this.player.height));
        this.tails.push(newTail);

        
    }

}