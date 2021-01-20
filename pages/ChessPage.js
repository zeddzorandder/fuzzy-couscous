import * as chess from '../entities/figures/chessboard.js';
import { TextRender } from '../entities/TextRender.js';
import { Page } from "../gameLogic/Page.js";
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
    }

}