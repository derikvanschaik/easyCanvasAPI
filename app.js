import {Box} from './shapes/Box.js' 
import {CanvasStage} from './canvas/CanvasStage.js' 

function main(){ 
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");

    const stage = new CanvasStage(canvas); 

    // args = x, y, width, height, ctx, draggable (boolean) 
    const b1 = new Box(50, 50, 100, 100, ctx, false); 
    const b2 = new Box(150, 190, 100, 100, ctx, true); 

    b1.drawBox();
    b2.drawBox();

    b1.onHover(() => console.log(`mouse${b1.isHoveredOn?'enter':'leave'}`), []);  

    b2.onDrag(()=>console.log("dragging b2"), []);  
    b2.onClick(()=> console.log("clicked b2!"), []);  

    stage.addObject(b1);
    stage.addObject(b2);  

}
window.addEventListener("load", main);   






