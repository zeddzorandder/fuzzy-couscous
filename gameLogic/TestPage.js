import { Rectangle } from "../entities/Rectangle.js";
import { TextRender } from "../entities/TextRender.js";
import { Hexagon } from '../entities/Hexagon.js';
import { Polygon } from '../entities/Polygon.js';
import { Page } from "./Page.js";
import * as iHandler from "./InputHandler.js";

export class TestPage extends Page {
    constructor(lc, id) {
        super(lc, id)
    }

    // This is the main loop for the "page"
    loadPage = (state) => { 

        this.addPageEntity(new Rectangle("portal", 1000,200,"blue",100,100));
        this.addPageEntity(new Rectangle("healplace", 400, 200, "green", 100,100));
        this.addPageEntity(new Hexagon(null, 6, 100, 200 ,300, "purple"));
        this.addPageEntity(new Polygon(null, 300, 50, null, "green"));
        var a = this.addPageEntity(new Rectangle("prikaz", 600,600,"purple", 100,100));
        a.addBehavior((e)=>{
            if(e.x <= 650) e.velx = 1;
            if(e.x >= 900) e.velx = -1; 

            e.x += e.velx;
        });
        
        this.player = this.addPageEntity(new Rectangle("player", 1050, 150, "white", 25, 25));
        this.healthDamage = this.addPageEntity(new Rectangle("healthDamage", 595, 130, "white", 300, 25));
        this.healthBar = this.addPageEntity(new Rectangle("healthbar", 595, 130, "yellow", 25, 25));

        this.healthBar.properties.maxwidth = 300;
        this.wait = 40;

        this.healthDamage.addBehavior((e, id)=>{
            if(this.healthBar.width < e.width && this.wait > 0){
                e.width--;
            }

        });

        this.healthBar.addBehavior((e)=>{
            if(e.width >= e.properties.maxwidth * 0.75){
                e.color = "green";
            }
            if(e.width >= e.properties.maxwidth * 0.5 && e.width < e.properties.maxwidth * 0.75){
                e.color = "yellow"
            }
            if(e. width <= e.properties.maxwidth * 0.25){
                e.color = "red";
            }
        });

        this.player.properties.directions = [false, false, false, false];
        this.player.properties.speed = 5;
        this.player.properties.health = 100;

        this.player.addBehavior((e)=>{
            if(e.properties.health <= 0){
                this.changePage("chesspage");
                e.properties.health = 0;
            } else {
                e.color = "white";
            }
        });

        this.ui_playerXPos = this.addPageEntity(new TextRender("sgfas", 500,75, ""));
        this.ui_playerYPos = this.addPageEntity(new TextRender("wertwer", 700,75, ""));
        this.ui_playerHealth = this.addPageEntity(new TextRender("wertwer", 850,75, ""));
        this.ui_tick = this.addPageEntity(new TextRender("sdvgsd", 1100,75, ""));

        this.abspos = 0;
        this.dmg = 0;
        this.barpos = 0;
    }

    processPage = () => {
        this.handlePlayer();

        this.healthBar.width = this.player.properties.health*3;

        this.ui_playerXPos.text = "X: "+this.player.x;
        this.ui_playerYPos.text = "Y: "+this.player.y;
        this.ui_playerHealth.text = "hp: "+this.player.properties.health;
        this.ui_tick.text = Math.floor(this.logicContext.tick/60);
    }


    handlePlayer = () => {
        iHandler.playerMovement(this.player);

        if (this.player.x < -20) {
            this.player.x = 1450;
        }
        if (this.player.x > 1450) {
            this.player.x = -20;
        }

        if(this.player.x >= 1000 && this.player.x <= 1100 && this.player.y >= 200 && this.player.y <= 300){
            if(this.player.properties.health > 0){
                if(this.logicContext.tick % 60 == 0){
                    this.dmg = Math.floor(Math.random()*12)+1
                    this.player.properties.health -= this.dmg;
                    this.barpos += 65;
                    this.addPageEntity(new Rectangle(null, this.barpos, 610, "red", 50, -this.dmg * 20));
                    this.addPageEntity(new TextRender(null, this.barpos+15, 610 - this.dmg * 20  - 25, this.dmg));
                }
            }
        }
        if(this.player.x >= 400 && this.player.x <= 500 && this.player.y >= 200 && this.player.y <= 300){
            if(this.player.properties.health <= 99){
                this.player.properties.health++;
                this.healthDamage.width = this.player.properties.health*3;
            }
        }
    }

}