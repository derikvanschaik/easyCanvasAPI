class Box{
    constructor(x, y,h, w, ctx){ 
        this.x = x; 
        this.y = y;
        this.h = h;
        this.w = w; 
        this.ctx = ctx;
        this.isHoveredOn = false;
        // function added by user 
        this.handleHover = null; 
    }
    drawBox(){ 
        this.ctx.strokeRect(this.x, this.y, this.w, this.h); 
    }
    // PARAMS: callback: function, args: list of args to pass into callback 
    // NOTE: pass in an empty function if no args as args param  
    onHover(callback, args){ 
        this.handleHover = {callback, args}; 
    }
    toggleIsHoveredOn(){
        this.isHoveredOn = !this.isHoveredOn;
        if(this.handleHover){
            this.handleHover.callback(...this.handleHover.args); 
        }
    }
}
export {Box};  