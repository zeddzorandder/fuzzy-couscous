import { Rectangle } from "../entities/Rectangle.js";
import { TextRender } from "../entities/TextRender.js";
import { Hexagon } from '../entities/Hexagon.js';
import { Polygon } from '../entities/Polygon.js';
import { Page } from "./Page.js";
import { Sprite } from "../entities/Sprite.js";
import * as iHandler from "./InputHandler.js";

export class SuperTestPage extends Page {

    loadPage = () => {
        this.addPageEntity(new Rectangle(null, 500,200, "blue", 200,100));
    }

    processPage = () => {

    }

}