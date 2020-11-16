import {Entity} from "./Entity.js";

//Code for hexagon shamelessly stolen from a stack overflow comment
export class Hexagon extends Entity {
    constructor(id, sides=6, size, x=0, y=0, color="red"){
        super(id, x, y, color);
        this.numberOfSides = sides;
        this.size = size;
    }

    render = (ctx) => {
        ctx.fillStyle = this.color;
        ctx.moveTo (this.x +  this.size * Math.cos(0), this.y +  this.size *  Math.sin(0));
        for (var i = 1; i <= this.numberOfSides; i++) {
            ctx.lineTo (this.x + this.size * Math.cos(i * 2 * Math.PI / this.numberOfSides), this.y + this.size * Math.sin(i * 2 * Math.PI / this.numberOfSides));
          }
        ctx.closePath();
        ctx.fill();
    }
}