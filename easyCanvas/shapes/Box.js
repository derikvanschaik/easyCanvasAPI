import {Shape} from './Shape.js'; 

class Box extends Shape{ 
    constructor(x, y, w, h, ctx, draggable){  
        super(x, y, ctx, draggable); 
        this.h = h;
        this.w = w; 
        this.name = "box"; 
    }
    clearBox(xPad, yPad){
        if(xPad && yPad){
            this.ctx.clearRect(this.x - xPad, this.y -yPad, this.w + 2*xPad, this.h + 2**yPad);
            return; 
        }
        this.ctx.clearRect(this.x, this.y, this.w, this.h);  
    }
    drawBox(color){ 
        const defaultColor = this.ctx.fillStyle; 
        this.ctx.fillStyle = color?? defaultColor;   
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = defaultColor; 
    }
}
export {Box};  