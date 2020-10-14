import { Entity } from "./Entity.js";
//TODO: add the ability to only specify size in the constructor

export class TextRender extends Entity{
    font = "";
    constructor(id,x,y,text,...args){
        super(x,y);
        this.text = text;
        (args.length > 0 ? this.color = args[0] : "");
        (args.length > 2 ? this.font = ""+args[2]+"px"+" "+args[1] : "");
    }

    render = (ctx) => {
        (this.font != undefined ? ctx.font = this.font : "");
        (this.color != undefined ? ctx.fillStyle = this.color : "");
        ctx.fillText(this.text, this.x, this.y+20);
    }

    setFont = (size, style) => {
       this.font = ""+size+"px"+" "+style;
    }
    setFontSize = (size) => {
        let st = this.font.substring(this.font.indexOf(' '), this.font.length);
        this.font = ""+size+"px" + st;
    }

    setFontFamily = (fontFamily) => {
        let st = this.font.substring(0,this.font.substring(' '));
        this.font = st + " "+ + fontFamily;
    }
}