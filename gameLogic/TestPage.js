import { Rectangle } from "../entities/Rectangle.js";
/*
    Pages are the "levels" you make. Currently, they are still under construction.
    To make a level, you create a Page. You can name it whatever, it doesn't use any kind of inheritance.
    Create the pages in the main Logic class and
**/
export class TestPage {
    constructor(logicContext, id){
        this.logicContext = logicContext;
        this.id = id;
        this.entities = logicContext.entities;
    }

    // This is the main loop for the "page"
    loadPage = () => {
        this.logicContext.addEntity(new Rectangle("djole", 800, 100, "red", 50,50));

        this.logicContext.findEntity("djole").addBehavior((e)=>{
            e.x += 1;
            
            if(e.x == 850){
                e.color = "green";
                e.y += 200;
            }

            if(e.x == 950){
                this.changePage(0);
            }
            if(e.x == 1200){
                
            }
        });
    }

    processPage = () => {

    }

    destroyPage = () => {
        this.logicContext.entities = [];
    }

    changePage = (id) => {
        this.logicContext.savedPages[this.id] = {"state": this.entities};
        this.destroyPage();
        this.logicContext.switchPage(id);
    }
}