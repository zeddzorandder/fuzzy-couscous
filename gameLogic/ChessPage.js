import { Rectangle } from "../entities/Rectangle.js";
import * as chess from '../entities/figures/chessboard.js';
/*
    Pages are the "levels" you make. Currently, they are still under construction.
    To make a level, you create a Page. You can name it whatever, it doesn't use any kind of inheritance.
    Create the pages in the main Logic class and
**/
export class ChessPage {
    constructor(logicContext, id){
        this.logicContext = logicContext;
        this.id = id;
        this.entities = logicContext.entities;
    }

    loadPage = () => {
       var fields = chess.loadChessboard(this.logicContext);
        fields[63].addBehavior((e)=>{
            e.x+=1;
            if(e.x == 670){
                this.changePage(1);
            }
        });
    }

    processPage = () => {

    }
    destroyPage = () => {
        this.logicContext.entities = [];
    }

    changePage = (pageId) => {
        this.destroyPage();
        this.logicContext.switchPage(pageId);
    }

}