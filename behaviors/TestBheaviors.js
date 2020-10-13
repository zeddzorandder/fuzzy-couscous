export var slideAndChangeColor = (color1, color2, limitx1, limitx2) => {
    let entity = renderer.entities[5];
    if(entity.x >= limitx1){
        entity.velx = -1;
        entity.color = color1;
    }
    if(entity.x <= limitx2){
        entity.velx = 1;
        entity.color = color2;
    }
    entity.x += entity.velx;
}