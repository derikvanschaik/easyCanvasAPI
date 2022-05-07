import {inBoundingBox} from '../utils/inBoundingBox.js'; 

class CanvasStage{ 
    constructor(el, ctx){  
        this.el = el;
        this.ctx = ctx; 
        this.objects = []; 
        this.el.addEventListener("mousemove",this.handleMouseMove.bind(this)); 
        this.el.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.el.addEventListener("mouseup", this.handleMouseUp.bind(this));
        // user defined callback function 
        // Actions registered as 'onChange' events: drag object, add/remove from objects list. 
        this.handleOnChange = null; 
    }
    onChange(callback, args){  
        this.handleOnChange = {callback, args}; 
    }
    handleOnChangeEvent(){ 
        if(this.handleOnChange){
            this.handleOnChange.callback(...this.handleOnChange.args); 
        }
    }
    handleMouseDown(e){
        // there will be an issue here with objects which are not squares for the bounding box... 
        for(const obj of this.objects){
            if (inBoundingBox(e.offsetX, e.offsetY, obj.x, obj.y, obj.w, obj.h)){
                obj.isDragging = true;
                obj.dragOffsetX = e.offsetX; 
                obj.dragOffsetY = e.offsetY;
                obj.dragPath = [];  
                break; 
            }
        }
    }
    handleMouseMove(e){
        const collidedObjects = [];

        for(const obj of this.objects){ 
            const hoveredStatus = obj.isHoveredOn;
            const isDragging = obj.isDragging && obj.draggable; 
            // drag event 
            if(isDragging){

                obj.clearBox(); 

                obj.x += e.offsetX -obj.dragOffsetX; 
                obj.y += e.offsetY - obj.dragOffsetY; 
                obj.dragOffsetX = e.offsetX; 
                obj.dragOffsetY = e.offsetY;

                // values are not used anywhere now except for length of the array so far
                // keeping as they may still be useful for other features later on 
                obj.dragPath.push([obj.dragOffsetX, obj.dragOffsetY]); 

                obj.drawBox();
                obj.handleDragEvent();   
            }
            // TODO: implement collision algorithm here....  

            // hover in and out events 
            if (inBoundingBox(e.offsetX, e.offsetY, obj.x, obj.y, obj.w, obj.h)){ 
                if(!hoveredStatus){
                    obj.toggleIsHoveredOn();
                }
            }else{
                if(hoveredStatus){
                    obj.toggleIsHoveredOn(); 
                }
            }
        }
        // redraw all collided objects 
        collidedObjects.forEach(obj => obj.drawBox());
        // handle user defined on change event 

    }
    handleMouseUp(e){
        for(const obj of this.objects){
            if (inBoundingBox(e.offsetX, e.offsetY, obj.x, obj.y, obj.w, obj.h)){ 
                obj.isDragging = false; 
                // drag event 
                if(obj.dragPath.length > 0){
                    this.handleOnChangeEvent(); 
                }else{
                    // click event 
                    obj.handleClickEvent(); 
                }
                break; 
            }
        }
    }
    addObject(obj){ 
        this.objects.push(obj);
        this.handleOnChangeEvent(); 
    }
    removeObject(obj){
        this.objects = this.objects.filter(o => o !== obj);
        this.handleOnChangeEvent(); 
    }
    getObjects(){
        return this.objects; 
    }
    // reassigns objects, clears the canvas and redraws new objects 
    update(newObjects){ 
        this.objects = newObjects; 
        this.ctx.clearRect(0 , 0, this.el.width, this.el.height); 
        for(const obj of this.objects){
            obj.drawBox(); 
        }
    }
}
export {CanvasStage} 