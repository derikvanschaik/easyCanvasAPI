import {Box} from './Box.js'; 
import {getFontDimensions} from '../utils/getFontDimensions.js'; 

class TextBox extends Box{ 
    constructor(x, y, w, h, ctx, draggable, text){  
        super(x, y, h, w, ctx, draggable);  
        this.text = text;
        this.name = "textbox";
    }
    drawTextBox(){
        const lines = this.text.split("\n");
        this.h = lines.length * getFontDimensions(this.ctx, lines[0])[1]; 
        let maxLine = 0;
        for(let i = 0; i < lines.length; i++){
            const [lineWidth, lineHeight] = getFontDimensions(this.ctx, lines[i]); 
            if(lineWidth > maxLine){
                maxLine = lineWidth; 
            }
            this.ctx.fillText(lines[i], this.x, this.y + (i * lineHeight));      
        }
        this.w = maxLine;
        this.ctx.strokeRect(this.x, this.y, this.w, this.h); 
    }
    
}
export {TextBox}; 