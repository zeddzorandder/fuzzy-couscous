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

    changePage = (pageId, mode) => {
        this.destroyPage();
        this.logicContext.switchPage(pageId, mode);
    }

    addPageEntity = (entity) => {
        return this.logicContext.addEntity(entity);
    }

    getEvent = () => {
        return this.logicContext.event;
    }
    
}