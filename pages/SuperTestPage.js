import { Rectangle } from "../entities/Rectangle.js";
import { TextRender } from "../entities/TextRender.js";
import { Hexagon } from '../entities/Hexagon.js';
import { Polygon } from '../entities/Polygon.js';
import { Page } from "../gameLogic/Page.js";
import { Sprite } from "../entities/Sprite.js";
import * as iHandler from "../gameLogic/InputHandler.js";

export class SuperTestPage extends Page {

    loadPage = () => {
        this.addPageEntity(new Rectangle(null, 500,200, "blue", 200,100));
        this.player = this.addPageEntity(new Rectangle("player", 500, 100, "red", 100,100));
        this.addPageEntity(new Rectangle("portal", 400, 400, "purple", 100, 100));

        this.player.properties.directions = [false, false, false, false];
        this.player.properties.speed = 5;
        this.player.properties.health = 100;

        // this.changePage("testpage", "playable");
    }

    processPage = () => {
        iHandler.playerMovement(this.player);
        if(this.player.x >= 400 && this.player.x <= 500 && this.player.y >= 400 && this.player.y <= 500){
            this.changePage("testpage", "playable");
        }
        
    }

}