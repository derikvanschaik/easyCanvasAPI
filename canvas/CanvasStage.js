import {inBoundingBox} from '../utils/inBoundingBox.js'; 

class CanvasStage{ 
    constructor(el){ 
        this.el = el; 
        this.objects = [];
        this.el.addEventListener("mousemove",this.handleMouseMove.bind(this));
        this.el.addEventListener("mousedown", this.handleMouseDown.bind(this));
        this.el.addEventListener("mouseup", this.handleMouseUp.bind(this)); 
    }
    handleMouseDown(e){
        for(const obj of this.objects){
            if (inBoundingBox(e.offsetX, e.offsetY, obj.x, obj.y, obj.w, obj.h)){
                obj.isDragging = true;
                obj.dragOffsetX = e.offsetX; 
                obj.dragOffsetY = e.offsetY;  
            }
        }
    }
    handleMouseMove(e){
        const collidedObjects = [];

        for(const obj of this.objects){ 
            const hoveredStatus = obj.isHoveredOn;
            const isDragging = obj.isDragging;
            // drag event 
            if(isDragging){
                obj.clearBox();

                obj.x += e.offsetX -obj.dragOffsetX; 
                obj.y += e.offsetY - obj.dragOffsetY; 
                obj.dragOffsetX = e.offsetX; 
                obj.dragOffsetY = e.offsetY; 

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
    }
    handleMouseUp(e){
        for(const obj of this.objects){
            if (inBoundingBox(e.offsetX, e.offsetY, obj.x, obj.y, obj.w, obj.h)){
                obj.isDragging = false; 
            }
        }
    }
    addObject(obj){
        this.objects.push(obj); 
    } 
}
export {CanvasStage} 