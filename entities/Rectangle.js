import {Entity} from "./Entity.js";

export class Rectangle extends Entity{
    constructor(id,x=0,y=0,color="white",width, height, ...args){
        super(id,x,y,color,(args.length >= 0 ? args[0] : null));
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