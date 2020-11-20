import {Entity} from "./Entity.js";

export class Sprite extends Entity {
    
    constructor(id, x, y, width, height, imgSrc, color = "black") {
        super(id, x, y, color);
        this.img = new Image();
        this.img.src = imgSrc;
        this.height = height;
        this.width = width;

        this.imageFrame = 0;
        this.imagePage = 0;
        
        //TEST VARIABLES, DELETE LATER!!!
        // this.sliceX = 33+(170*this.imageFrame);
        // this.sliceY = 43+this.imagePage;

        this.sliceX = this.imageFrame * 75;
        this.sliceY = 0;
    }

    render = (ctx) => {
        // ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        // ctx.drawImage(this.img, this.sliceX, this.sliceY, this.width,  this.height, this.x, this.y, this.width, this.height);
        ctx.drawImage(this.img, this.sliceX, this.sliceY, this.width,  this.height, this.x, this.y, this.width, this.height);
    }

}
