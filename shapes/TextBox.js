import {Box} from './Box.js'; 

class TextBox extends Box{
    constructor(x, y, h, w, ctx, text){ 
        super(x, y, h, w, ctx); 
        this.text = text;  
    }
    drawTextBox(){ 
        super.drawBox(); 
        // draw text 
    }
}
export {TextBox}; 