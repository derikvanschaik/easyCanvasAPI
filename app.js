import {Box} from './shapes/Box.js' 
import {CanvasStage} from './canvas/CanvasStage.js' 

function main(){ 
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");

    const stage = new CanvasStage(canvas); 

    // args = x, y, width, height, ctx, draggable (boolean) 
    const b2 = new Box(50, 50, 100, 100, ctx, false); 
    const b3 = new Box(150, 190, 100, 100, ctx, true); 

    b2.drawBox();
    b3.drawBox();

    b2.onHover(() => console.log(`mouse${b2.isHoveredOn?'enter':'leave'}`), []);  

    b3.onDrag(()=>console.log("dragging b3"), []); 
    b2.onClick(()=> console.log("clicked b2!"), []);  

    stage.addObject(b2);
    stage.addObject(b3); 

}
window.addEventListener("load", main);   






