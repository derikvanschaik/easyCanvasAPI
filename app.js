import {Box} from './shapes/Box.js'
import {TextBox} from './shapes/TextBox.js';
import {CanvasStage} from './canvas/CanvasStage.js' 

window.addEventListener("load",function(){
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");
    const stage = new CanvasStage(canvas);

    const b2 = new TextBox(50, 50, 100, 100, ctx, "Hello world"); 
    b2.drawTextBox();
    b2.onHover(function(){ 
        console.log(`mouse${b2.isHoveredOn? 'enter': 'leave'}`); 
    }, [])
    stage.addObject(b2); 

}); 






