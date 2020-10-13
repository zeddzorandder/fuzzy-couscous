export class Entity{
    constructor(x, y, color){
        this.x = x;
        this.y = y;
        this.color = color;
        this.behaviors = [];
        this.renderComponents = [];
        this.velx = 0;
        this.vely = 0;
    }
    addBehavior = (behavior) => this.behaviors.push(behavior)
    doBehavior = (entity) => {
        for(var i = 0; i < this.behaviors.length; i++){
            (this.behaviors[i] instanceof Function ? this.behaviors[i](this) : "");
        }
    }
}