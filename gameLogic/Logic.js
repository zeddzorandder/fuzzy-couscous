import * as cfg from './LogicConfig.js';
import { Rectangle } from '../entities/Rectangle.js';
import * as chessboard from '../entities/figures/chessboard.js';
import { ChessPage } from './ChessPage.js';
import { TestPage } from './TestPage.js';

export class Logic{
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = Math.ceil(1000/(1000/cfg.INTERVAL)); //sort of ok, i guess.
        this.activePage = -1;

        this.pages = [];

        this.activePage = this.pages.push(new ChessPage(this, this.pages.length))-1; // first page
        this.pages.push(new TestPage(this, this.pages.length)); //all otherpages
        
        this.switchPage(1);
        console.log(this.savedPages);

        setInterval(() => { // i don't like it. But it has to be this way.
            renderer.render();
            this.tick+=1;
            if(this.tick >= 1000){
                this.tick = 0;
            }

            this.pages[this.activePage].processPage();
            update(this.entities);
        }, 1000/cfg.INTERVAL);
    }

    switchPage = (pageId) => {
        this.activePage = pageId;
        this.pages[pageId].loadPage();
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

