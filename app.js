import {TextBox} from './easyCanvas/shapes/TextBox.js' 
import {CanvasStage} from './easyCanvas/canvas/CanvasStage.js' 
import { Box } from './easyCanvas/shapes/Box.js'; 
import {Line} from './easyCanvas/shapes/Line.js'; 

function main(){ 
    const canvas = document.querySelector("canvas"); 
    const ctx = canvas.getContext("2d");
    canvas.height = window.innerHeight; 
    canvas.width = window.innerWidth; 

    const stage = new CanvasStage(canvas, ctx);

    const textbox = new TextBox(100, 100, 200, 200, ctx, true, 'Hello\nworld\nhow ya?');
    const line = new Line(textbox.x, textbox.y, 400, 400, ctx); 
    line.drawLine(); 
    textbox.drawTextBox();
    stage.addObject(line); 
    stage.addObject(textbox);

    textbox.onDrag(function(){
        line.fromX = textbox.x; 
        line.fromY = textbox.y; 
        stage.update(stage.objects); 
    }, []);

    textbox.onClick(function(){
        textbox.toggleEditing(); 
    }, []);





    // // args = x, y, width, height, ctx, draggable (boolean), text
    // const b = new Box(200, 200, 100, 100, ctx, true); 
    // const b2 = new Box(400, 400, 100, 100, ctx, true);
    // const b3 = new Box(600, 400, 100, 200, ctx, true);

    // b.setColor("blue"); 
    // b2.setColor("blue"); 
    // b3.setColor("green"); 

    // const line = new Line(b.x, b.y, b2.x, b2.y, ctx);
    // const line2 = new Line(b.x, b.y, b3.x, b3.y, ctx); 
    // // add these properties to line object
    // line.from = b;
    // line.to = b2;
    // line2.from = b;
    // line2.to = b3;

    // line.drawLine();
    // line2.drawLine();

    // b.drawBox();
    // b2.drawBox();
    // b3.drawBox();

    // stage.addObject(line);
    // stage.addObject(line2);

    // stage.addObject(b);
    // stage.addObject(b2);
    // stage.addObject(b3);

    // [b, b2, b3].forEach(box =>{
    //     box.onHover(function(){ 
    //         if(box.isHoveredOn){
    //             box.setColor("red");
    //             box.clearBox(); 
    //             box.drawBox(); 
    //         }else{
    //             box.setColor("green");   
    //             box.clearBox(); 
    //             box.drawBox();  
    //         }
    //     }, []);

    //     box.onClick(function(){ 
    //         [line, line2].forEach(line =>{
    //             if(line.from === box || line.to === box){ 
    //                 stage.removeObject(line); 
    //             }
    //         })
    //         stage.removeObject(box); 
    //     }, []); 

    //     box.onDrag(function(){
    //         [line, line2].forEach(line =>{
    //             line.fromX = line.from.x; 
    //             line.fromY = line.from.y; 
    //             line.toX = line.to.x; 
    //             line.toY = line.to.y; 
    //         }); 
    //         // redraw canvas 
    //         stage.update(stage.objects); 
    //     }, []);
    // }); 

    // stage.onChange(function(){
    //     // redraw canvas 
    //     stage.update(stage.objects); 
    // }, []);

}
window.addEventListener("load", main);   






