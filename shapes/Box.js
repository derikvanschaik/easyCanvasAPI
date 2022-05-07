class Box{
    constructor(x, y,h, w, ctx, draggable){ 
        this.x = x; 
        this.y = y;
        this.h = h;
        this.w = w; 
        this.ctx = ctx;
        this.draggable = draggable; 

        this.isHoveredOn = false;
        this.isDragging = false;
        this.dragOffsetX = null; 
        this.dragOffsetY = null; 
        // callback functions added by user 
        this.handleHover = null;
        this.handleDrag = null;
        this.handleClick = null; 
    }
    clearBox(){
        this.ctx.clearRect(this.x, this.y, this.w, this.h);  
    }
    drawBox(color){
        const defaultColor = this.ctx.fillStyle; 
        this.ctx.fillStyle = color?? defaultColor;   
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
        this.ctx.fillStyle = defaultColor; 
    }
    // PARAMS: callback: function, args: list of args to pass into callback 
    // NOTE: pass in an empty function if no args as args param  
    onHover(callback, args){ 
        this.handleHover = {callback, args};  
    }
    onDrag(callback, args){ 
        this.handleDrag = {callback, args}; 
    }
    onClick(callback, args){
        this.handleClick = {callback, args}; 
    }
    // stage calls to execute user defined callback functions after event 
    handleDragEvent(){ 
        if(this.handleDrag){
            this.handleDrag.callback(...this.handleDrag.args); 
        }
    }
    handleClickEvent(){ 
        if(this.handleClick){
            this.handleClick.callback(...this.handleClick.args); 
        }
    }
    toggleIsHoveredOn(){
        this.isHoveredOn = !this.isHoveredOn;
        if(this.handleHover){
            this.handleHover.callback(...this.handleHover.args); 
        }
    }
}
export {Box};  