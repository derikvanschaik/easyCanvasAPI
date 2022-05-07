import {Box} from './shapes/Box.js'
import {TextBox} from './shapes/TextBox.js';
import {CanvasStage} from './canvas/CanvasStage.js' 

window.addEventListener("load",function(){
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");
    const stage = new CanvasStage(canvas);

    const b2 = new TextBox(50, 50, 100, 100, ctx, "Hello world");
    const b3 = new TextBox(150, 190, 100, 100, ctx, "");
    b2.drawTextBox();
    b3.drawTextBox(); 

    b2.onHover(function(){ 
        if(b2.isHoveredOn){
            // delete box from canvas visually 
            b2.clearBox();
            b2.drawBox("green"); 
        }else{
            // redraw
            b2.clearBox(); 
            b2.drawBox(); 
        }
    }, [])

    b3.onHover(function(){
        if(b3.isHoveredOn){
            // delete box from canvas visually 
            b3.clearBox();
            b3.drawBox("blue"); 
        }else{
            // redraw 
            b3.clearBox(); 
            b3.drawBox(); 
        }
    }, []);

    b3.onDrag(function(e){
        console.log("dragging b3 !"); 
    }, [])

    stage.addObject(b2);
    stage.addObject(b3); 

}); 






