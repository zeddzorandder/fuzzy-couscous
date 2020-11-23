
/**
 * Base Page class. The pages are the individual game cells which you play in. They contain all the objects and code for that particular cell.
 * 
 */
export class Page {
    constructor(logicContext, id){
        this.logicContext = logicContext;
        this.id = id;
        this.entities = logicContext.entities;
    }

    // Upon switching to a page, its "loadPage" method will be called. You can use this method to initialize and load assets or whatever you may
    // need to execute the level you are working on
    loadPage = (state) => {
        
    }
    // processPage is called each frame. Use this to update your entities, perform collision checks etc.
    processPage = () => {

    }

    // called when you switch to another page. "Destroys" all entities on the current page.
    destroyPage = () => {
        this.logicContext.entities = [];
    }

    // Self explanitory. The "mode" parameter is used to determine which EventListener mode(s) the page loads
    // You can read more about modes in the Listeners.js file
    changePage = (pageId, mode) => {
        this.destroyPage();
        this.logicContext.switchPage(pageId, mode);
    }

    // Adds an entity to the entity list
    addPageEntity = (entity) => {
        return this.logicContext.addEntity(entity);
    }

    findPageEntity = (entityId) => {
        return this.logicContext.findEntity(entityId);
    }

    // Returns the eventlistener event. You can either pass the and get just the value, or leave it empty and receive the whole event object
    getEvent = (key) => {
        return key != undefined ? { "type": this.logicContext.event.type,"value": this.logicContext.event[key]} : this.logicContext.event; 
    }

    
    getEntities = () => {
        return this.logicContext.entities;
    }
}