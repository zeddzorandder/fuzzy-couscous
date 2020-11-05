import * as cfg from './LogicConfig.js';
import { Rectangle } from '../entities/Rectangle.js';
import * as chessboard from '../entities/figures/chessboard.js';

export class Logic{
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = Math.ceil(1000/(1000/cfg.INTERVAL)); //sort of ok, i guess.

        this.pages = [];

        var fields = chessboard.loadChessboard(this);

        setInterval(() => { // i don't like it. But it has to be this way.
            renderer.render();
            this.tick+=1;
            if(this.tick >= 1000){
                this.tick = 0;
            }
            update(this.entities);
        }, 1000/cfg.INTERVAL);

    }

    addEntity = (entity) => {
        this.entities.push(entity);
        return entity;
    }

    findEntity = (id) => {
        for(let i = 0; i < this.entities.length; i++){
            if(this.entities[i].id == id){
                return this.entities[i];
            }
        }
    }
} 

function update(entities){
    for(let i = 0; i < entities.length; i++){
            entities[i].doBehavior();
    }
    renderer.updateGraphicsEntities(entities);
}

