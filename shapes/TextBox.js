import {Box} from './Box.js'; 

class TextBox extends Box{
    constructor(x, y, h, w, ctx, draggable, text){ 
        super(x, y, h, w, ctx, draggable);  
        this.text = text;  
    }
    drawTextBox(){ 
        super.drawBox(); 
        // draw text 
    }
}
export {TextBox}; 