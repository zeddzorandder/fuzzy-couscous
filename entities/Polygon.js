import { Entity } from "./Entity.js";

export class Polygon extends Entity {

    /*
        The X, and Y for the polygon is used as the first point from where it will be drawn
    **/
    constructor(id, x, y, vertexArray, color) {
        super(id, x, y, color);
        this.vertexArray = vertexArray;
    }

    render = (ctx) => {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);

        ctx.lineTo(this.x+50, this.y);
        ctx.lineTo(this.x+50, this.y+50);
        ctx.lineTo(this.x+25, this.y+75);
        ctx.lineTo(this.x, this.y+50);
        
        ctx.closePath();
        ctx.fill();
    }
}