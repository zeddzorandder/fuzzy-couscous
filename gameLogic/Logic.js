import * as cfg from './LogicConfig.js';
import { Rectangle } from '../entities/Rectangle.js';
import { TextRender } from '../entities/TextRender.js';

export class Logic{
    
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = 1000/(1000/cfg.INTERVAL); //bad!

        this.addEntity(new Rectangle(50,50,"black", 90,75));
        this.addEntity(new TextRender(30,30,"fsda", "blue"));

        this.entities[0].addBehavior((e) => {
            if(this.tick % 62 == 0){
                console.log("asd");
            }
        });

        setInterval(() => { // i don't like it. But it has to be this way.
            renderer.render();
            this.tick+=1;
            if(this.tick >= 1000){
                this.tick = 0;
            }
            update(this.entities);
        }, 1000/cfg.INTERVAL);

    }

    addEntity = (entity) =>{
        this.entities.push(entity);
    }
} 

function update(entities){
    for(let i = 0; i < entities.length; i++){
            entities[i].doBehavior();
    }
    renderer.updateGraphicsEntities(entities);
}
