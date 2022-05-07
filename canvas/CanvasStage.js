import {inBoundingBox} from '../utils/inBoundingBox.js'; 

class CanvasStage{ 
    constructor(el){ 
        this.el = el; 
        this.objects = [];
        this.el.addEventListener("mousemove",this.handleMouseMove.bind(this)); 
    }
    handleMouseMove(e){ 
        for(const obj of this.objects){ 
            const hoveredStatus = obj.isHoveredOn; 
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
    }
    addObject(obj){
        this.objects.push(obj); 
    } 
}
export {CanvasStage} 