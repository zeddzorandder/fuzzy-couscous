import { Rectangle } from "../entities/Rectangle.js";
import { Page } from "./Page.js";

export class TestPage extends Page {
    constructor(logicContext, id){
        super(logicContext, id)
    }

    // This is the main loop for the "page"
    loadPage = () => {
        this.logicContext.addEntity(new Rectangle("djole", 800, 100, "red", 50,50));

        this.logicContext.findEntity("djole").addBehavior((e)=>{
            e.x += 2;
            
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
}