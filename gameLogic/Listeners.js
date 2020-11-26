// All listener action should be defined here
export class ListenerHandler {
    
    constructor(logic){
        this.logic = logic;
        this.listenersLoaded = false;
    }

    loadListeners = (mode) =>{
        if(mode == "playable"){
            this.player = this.logic.findEntity("player");
            document.addEventListener("keypress",(e)=>this.handlePlayerKeyPress(e));
            document.addEventListener("keyup",(e)=>this.handlePlayerKeyUp(e));
            document.addEventListener("click", (e) => this.handleClick(e));
            this.listenersLoaded = true;
        }

        if(mode == "edit"){
            document.addEventListener("keypress",(e)=>this.handlePlayerKeyPress(e));
            document.addEventListener("keyup",(e)=>this.handlePlayerKeyUp(e));
            document.addEventListener("click", (e) => this.handleClick(e));
            document.addEventListener("mousedown", (e) => this.handleMouseDown(e));
        }
        
        if(mode == "clickable"){
            document.addEventListener("click", (e) => this.handleClick(e));
            this.listenersLoaded = true;
        }
    }

    // This should be made to work dynamically , regardless of mode or handler used.
    removeListeners = () => {
        if(this.listenersLoaded){
            document.removeEventListener("keypress",(e)=>this.handlePlayerKeyPress(e));
            document.removeEventListener("keyup",(e)=>this.handlePlayerKeyUp(e));
            document.removeEventListener("click",(e)=>this.handleClick(e));
            this.listenersLoaded = false;
        }
    }

    handleClick = (e) => {
        this.logic.event = e;
    }

    handleMouseDown = (e) => {
        this.logic.event = e;
    }

    handlePlayerKeyPress = (e) => {
        if(e.code == "KeyW"){
            this.player.properties.directions[0] = true;
        }
        if(e.code == "KeyA"){
            this.player.properties.directions[1] = true;
        }
        if(e.code == "KeyS"){
            this.player.properties.directions[2] = true;
        }
        if(e.code == "KeyD"){
            this.player.properties.directions[3] = true;
        }
    }

    handlePlayerKeyUp = (e) => {
        if(e.code == "KeyW"){
            this.player.properties.directions[0] = false;
        }
        if(e.code == "KeyA"){
            this.player.properties.directions[1] = false;
        }
        if(e.code == "KeyS"){
            this.player.properties.directions[2] = false;
        }
        if(e.code == "KeyD"){
            this.player.properties.directions[3] = false;
        }
    }



}