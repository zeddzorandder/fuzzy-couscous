import * as chess from '../entities/figures/chessboard.js';
import { TextRender } from '../entities/TextRender.js';
import { Page } from "./Page.js";
/*
    Pages are the "levels" you make. Currently, they are still under construction.
    To make a level, you create a Page. You can name it whatever, it doesn't use any kind of inheritance.
    Create the pages in the main Logic class and
**/
export class ChessPage extends Page {
    constructor(logicContext, id){
        super(logicContext, id);
    }

    loadPage = (state) => {
       var fields = chess.loadChessboard(this.logicContext);
        fields[63].addBehavior((e)=>{
            e.x+=1;
            if(e.x == 750){
                this.changePage("testpage", "playable");
            }
        });

        this.logicContext.addEntity(new TextRender("asdasd",750,600,"GAME OVER"));
    }

}