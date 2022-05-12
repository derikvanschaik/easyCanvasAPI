import {TextBox} from './easyCanvas/shapes/TextBox.js' 
import {CanvasStage} from './easyCanvas/canvas/CanvasStage.js' 
import { Box } from './easyCanvas/shapes/Box.js';

function main(){ 
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 

    const stage = new CanvasStage(canvas, ctx);

    // args = x, y, width, height, ctx, draggable (boolean), text
    const t = new TextBox(50, 50, 100, 100, ctx, true, "Hello World"); 
    const t2 = new TextBox(150, 190, 100, 100, ctx, true, "Example\nhaha isn't this cool?"); 
    const t3 = new TextBox(400, 100, 100, 200, ctx, true, "Box over here!");
    const b = new Box(200, 200, 100, 100, ctx, true); 
    
    // draw the text boxes onto the canvas using their methods 
    t.drawTextBox(); 
    t2.drawTextBox();
    t3.drawTextBox();
    b.drawBox();  

    let selected = null; 

    // add click listeners to each textbox (as if they were html elements!)
    [t, t2, t3, b].forEach(box =>{

        // quick hack to make up for lack of collision detection 
        box.onDrag(()=> {
            stage.update(stage.objects);     
        }, []);

        if(box.name === "box") return 

        box.onClick(function(){  
            if(selected === null){
                // turns box editing on 
                selected = box;
                box.toggleEditing(); 
                return; 
            }
            if(selected !== box){
                // turns last box editing off 
                selected.toggleEditing(); 
                selected = box;
                box.toggleEditing(); 
                return; 
            }
            // selected is box, should turn editing off and reset selected 
            selected.toggleEditing(); 
            selected = null;  
        }, []);

        box.onEdit(function(){ 
            // will output the text that the box has after an edit 
            console.log(box.getValue());  
        }, []);
    }); 

    // sometimes the objects get dragged over and erased... this will take care of that for now 
    // stage.onChange(function(){
    //     stage.update(stage.objects); 
    // }, []); 

    // add the objects to the stage, this allows the api to keep track of the objects 
    // and handle their event listeners and fire them. 
    stage.addObject(t);
    stage.addObject(t2);
    stage.addObject(t3);
    stage.addObject(b); 


}
window.addEventListener("load", main);   






