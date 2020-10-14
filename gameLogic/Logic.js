import * as cfg from './LogicConfig.js';
import { Rectangle } from '../entities/Rectangle.js';
import { TextRender } from '../entities/TextRender.js';


export class Logic{
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = Math.ceil(1000/(1000/cfg.INTERVAL)); //sort of ok, i guess.

        // this.addEntity(new Rectangle(null, 0,0,"red",50,50));

        // var y = 0;
        // var boardSize = 80;
        // var chessFields = [];
        // for(var i = 1; i <= 8; i++){
        //     for(var j = 1; j <= 8; j++){
        //        if((i+j) %2 == 0){
        //             chessFields.push(this.addEntity(new Rectangle(null,j*boardSize,y,"yellow",boardSize,boardSize)));    
        //        } else {
        //             chessFields.push(this.addEntity(new Rectangle(null,j*boardSize,y,"black",boardSize,boardSize)));   
        //        }
        //     }
        //     y += boardSize;
        // }

        // var knightPos = 31;

        
        
        // this.findEntity(chessFields[knightPos]).color = "purple";
        // this.findEntity(chessFields[knightPos+16+1]).color = "red";
        // this.findEntity(chessFields[knightPos+16-1]).color = "red";
        // this.findEntity(chessFields[knightPos-16-1]).color = "red";
        // this.findEntity(chessFields[knightPos-16+1]).color = "red";
        // this.findEntity(chessFields[knightPos-10]).color = "red";
        // this.findEntity(chessFields[knightPos+10]).color = "red";
        // this.findEntity(chessFields[knightPos+6]).color = "red";
        // this.findEntity(chessFields[knightPos-6]).color = "red";

        this.addEntity(new Rectangle("djole", 50,50,"black",50,50));
        this.findEntity("djole").addBehavior(function(e){
            e.x+=1;
        });
        this.findEntity("djole").addBehavior(function(e){
            if(e.x == 150){
                e.color = "blue";
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
        return entity.id;
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

