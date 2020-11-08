import { Rectangle } from "../entities/Rectangle.js";
import { Page } from "./Page.js";

export class TestPage extends Page {
    constructor(logicContext, id) {
        super(logicContext, id)
    }

    // This is the main loop for the "page"
    loadPage = (state) => {

        this.logicContext.addEntity(new Rectangle("portal", 1000,200,"blue",100,100));

        this.player = this.logicContext.addEntity(new Rectangle("player", 800, 100, "red", 50, 50));
        this.player.properties.directions = [false, false, false, false];
        this.player.properties.speed = 10;

    }

    processPage = () => {
        this.handlePlayer();

    }

    handlePlayer = () => {
        //make this load for the player every time
        if (this.player.properties.directions[0]) {
            this.player.vely = -this.player.properties.speed;
        } else {
            this.player.vely = 0;
        }
        if (this.player.properties.directions[1]) {
            this.player.velx = -this.player.properties.speed;
        } else {
            this.player.velx = 0;
        }
        if (this.player.properties.directions[2]) {
            this.player.vely = this.player.properties.speed;
        }
        if (this.player.properties.directions[3]) {
            this.player.velx = this.player.properties.speed;
        }

        this.player.x += this.player.velx;
        this.player.y += this.player.vely;

        if (this.player.x < -20) {
            this.player.x = 1450;
        }
        if (this.player.x > 1450) {
            this.player.x = -20;
        }

        if(this.player.x >= 1000 && this.player.x <= 1100 && this.player.y >= 200 && this.player.y <= 300){
            this.changePage("chesspage");
        }
    }


}