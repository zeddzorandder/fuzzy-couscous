export class Entity {
    constructor(id, x, y, color, ...args) {
        if (id == null) {
            this.id = Math.floor(Math.random() * 100000000);
        } else {
            this.id = id;
        }
        this.x = x;
        this.y = y;
        (args.length >= 0 ? this.parent = args[0] : this.parent = null);
        this.color = color;
        this.behaviors = [];
        this.children = [];
        this.velx = 0;
        this.vely = 0;
        this.properties = {};
    }

    addBehavior = (behavior, id) => {
        let behaviorId = id == undefined ? Math.floor(Math.random() * 100000000) : id;
        this.behaviors.push({
            "id": behaviorId,
            "behavior": behavior
        });
        return behaviorId;
    }

    removeBehaviors = () => this.behaviors = [];
    removeBehavior = (id) => {
        this.behaviors = this.behaviors.filter(function (obj) {
            return obj.id != id;
        });
    }

    doBehavior = (entity) => {
        for (var i = 0; i < this.behaviors.length; i++) {
            (this.behaviors[i].behavior instanceof Function ? this.behaviors[i].behavior(this, this.behaviors[i].id) : "");
        }
    }

}