// All listener action should be defined here

export var loadListeners = (logic) =>{
    var player = logic.findEntity("player");

    document.addEventListener("keypress", (e)=>{
        handlePlayerKeyPress(e);
    });

    document.addEventListener("keyup", (e)=>{
        handlePlayerKeyUp(e);
    });

   var handlePlayerKeyPress = (e) =>{
        if(e.code == "KeyW"){
            player.properties.directions[0] = true;
        }
        if(e.code == "KeyA"){
            player.properties.directions[1] = true;
        }
        if(e.code == "KeyS"){
            player.properties.directions[2] = true;
        }
        if(e.code == "KeyD"){
            player.properties.directions[3] = true;
        }
    }

  var  handlePlayerKeyUp = (e) =>{
        if(e.code == "KeyW"){
            player.properties.directions[0] = false;
        }
        if(e.code == "KeyA"){
            player.properties.directions[1] = false;
        }
        if(e.code == "KeyS"){
            player.properties.directions[2] = false;
        }
        if(e.code == "KeyD"){
            player.properties.directions[3] = false;
        }

    }

}