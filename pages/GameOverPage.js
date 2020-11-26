import { Rectangle } from "../entities/Rectangle.js";
import { TextRender } from "../entities/TextRender.js";
import { Hexagon } from '../entities/Hexagon.js';
import { Polygon } from '../entities/Polygon.js';
import { Page } from "../gameLogic/Page.js";
import { Sprite } from "../entities/Sprite.js";
import * as iHandler from "../gameLogic/InputHandler.js";

export class GameOverPage extends Page {

    loadPage = () => {
        this.addPageEntity(new TextRender("gameovertext", 650, 300, "GAME OVER"));

        this.addPageEntity(new Rectangle("tryButton", 650, 600, "green", 200,100));
        this.addPageEntity(new TextRender("tryagain", 700, 650, "Try Again", "purple"));


        this.addPageEntity(new Rectangle("clock", 0, 300, "blue", 10, 10));
        this.findPageEntity("clock").addBehavior((e)=>{
            e.x += 1;
            if(e.x >= 120){
                // this.changePage("snakepage", "playable");
                e.x = 0;
            }
        });

    }

    processPage = () => {

    }
}