import * as cfg from './RenderConfig.js';

export class Renderer {
    entities = [];
    render = () => {
        refreshScreen();
        for (let i = 0; i < this.entities.length; i++) {
            this.entities[i].render(ctx);
        }
    }
    updateGraphicsEntities = (entities) => this.entities = entities;
    addGraphicsEntity = (entity) => this.entities.push(entity);
}

function refreshScreen() {
    
    ctx.fillStyle = cfg.BACKGROUND_COLOR;
    ctx.fillRect(0, 0, c.width, c.height);
    ctx.fillStyle = cfg.DEFAULT_STROKE_COLOR;
    ctx.font = cfg.DEFAULT_FONT;
}