import {Entity} from "./Entity.js";

export class Rectangle extends Entity{
    constructor(x=0,y=0,color="white",width, height){
        super(x,y,color);
        this.width = width;
        this.height = height;
    }

    render = (ctx) => {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, 
                     this.y, 
                     this.width, 
                     this.height);
    }
}