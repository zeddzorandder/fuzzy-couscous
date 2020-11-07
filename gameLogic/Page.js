export class Page {
    constructor(logicContext, id){
        this.logicContext = logicContext;
        this.id = id;
        this.entities = logicContext.entities;
    }

    loadPage = (state) => {
        
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