import { Renderer } from './gameRender/Renderer.js';
import { Logic } from './gameLogic/Logic.js';

window.onload = function(){
    this.c = document.getElementById("myCanvas");
    this.ctx = c.getContext("2d");
    this.renderer = new Renderer();
    this.logic = new Logic(renderer);
}
