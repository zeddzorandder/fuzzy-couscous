import * as cfg from './LogicConfig.js';
// import * as listeners from './Listeners.js';
import { ListenerHandler } from './Listeners.js';
import { ChessPage } from './ChessPage.js';
import { TestPage } from './TestPage.js';

export class Logic{
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = Math.ceil(1000/(1000/cfg.INTERVAL)); //sort of ok, i guess.
        this.activePage = "";
        this.listeners = new ListenerHandler(this);

        this.pages = {};

        this.initPage("chesspage", new ChessPage(this));
        this.initPage("testpage", new TestPage(this));
        
        this.switchPage("testpage", "playable");


        setInterval(() => { // i don't like it. But it has to be this way.
            renderer.render();
            this.tick+=1;
            if(this.tick >= 1920){
                this.tick = 0;
            }
            this.pages[this.activePage].obj.processPage();

            update(this.entities);
        }, 1000/cfg.INTERVAL);
    }

    switchPage = (pageName, mode) => {
        this.listeners.removeListeners();
        this.activePage = pageName;
        this.pages[pageName].obj.loadPage();
        this.listeners.loadListeners(mode);

    }

    initPage = (pageName, pageObject) => {
        this.pages[pageName] = {obj:pageObject, state:[]};
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

