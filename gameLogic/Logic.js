import * as cfg from './LogicConfig.js';
import { ListenerHandler } from './Listeners.js';
import { ChessPage } from '../pages/ChessPage.js';
import { TestPage } from '../pages/TestPage.js';
import { SuperTestPage } from '../pages/SuperTestPage.js';
/*
    The core of the engine. Logic is responsible for storing all entity objects and for sending them to the renderer to be displayed on the screen,
    as well as the addition of new entities, the execution of their behaviors, the pages the entities are instantiated in and keeping track
    of various other metadata like a seconds, frame ticks etc.
**/
export class Logic{
    
    constructor(renderer){
        this.renderer = renderer;
        this.entities = [];
        this.tick = 0;
        this.second = Math.ceil(1000/(1000/cfg.INTERVAL)); 
        this.activePage = "";
        this.listeners = new ListenerHandler(this);
        this.event = [];
        this.pages = {};

        this.initPage("chesspage", new ChessPage(this));
        this.initPage("testpage", new TestPage(this));
        this.initPage("supertestpage", new SuperTestPage(this));
        this.switchPage("testpage", "playable");

        // The game loop. Tells the renderer to render everything and executes whatever code is in the current
        //active pages "processPage" function.
        setInterval(() => { 
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

