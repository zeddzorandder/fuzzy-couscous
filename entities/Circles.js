import {Entity} from "./Entity.js";

export class Circle extends Entity{
    constructor(id,x,y,color, size){
        super(id,x,y,color);
        this.size = size;
        this.color = color;
    }

    render = (ctx) =>{
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, 
                this.y, 
                this.size, 
                0, 2 * Math.PI);
        ctx.stroke();
    }
    
}