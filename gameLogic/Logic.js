import * as cfg from './LogicConfig.js';
import { Rectangle } from '../entities/Rectangle.js';
import { TextRender } from '../entities/TextRender.js';

export class Logic{
    renderer = 0;
    constructor(renderer){
        this.renderer = renderer;
        this.vbasd = [1,2,3];

        this.renderer.addGraphicsEntity(new Rectangle(0,0,"blue",75,45));
        this.renderer.addGraphicsEntity(new TextRender(14,30,"yo yo", "purple", "Verdana", 70));

        this.renderer.entities[1].setFontSize(44);

        this.renderer.entities[1].addBehavior((e) => {
            e.x += 1;
        });

        this.renderer.entities[0].addBehavior((e)=>{
            if(e.x >= 200){
                e.velx = -1;
                e.color = "blue";
            }
            if(e.x <= 100){
                e.velx = 1.3;
                e.color = "red";
            }
            e.x += e.velx;
        });
        

        setInterval(game, 1000/cfg.INTERVAL);
    }
}

function game(){
    renderer.render();
    update(renderer.entities);
}
function update(entities){
    for(let i = 0; i < entities.length; i++){
            entities[i].doBehavior();
    }
    renderer.updateGraphicsEntities(entities);
}