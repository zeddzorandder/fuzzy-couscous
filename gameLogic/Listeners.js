// All listener action should be defined here
export class ListenerHandler {
    
    constructor(logic){
        this.logic = logic;
    }

    loadListeners = () =>{
        this.player = this.logic.findEntity("player");
        document.addEventListener("keypress",(e)=>this.handlePlayerKeyPress(e));
        document.addEventListener("keyup",(e)=>this.handlePlayerKeyUp(e));
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