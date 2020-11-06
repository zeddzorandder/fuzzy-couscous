import * as chess from '../entities/figures/chessboard.js';
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

    loadPage = () => {
       var fields = chess.loadChessboard(this.logicContext);
        fields[63].addBehavior((e)=>{
            e.x+=1;
            if(e.x == 670){
                this.changePage(1);
            }
        });
    }

}