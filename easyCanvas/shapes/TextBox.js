import {Box} from './Box.js'; 
import {getFontDimensions} from '../utils/getFontDimensions.js'; 

class TextBox extends Box{ 
    #text; 
    constructor(x, y, w, h, ctx, draggable, text){ 
        super(x, y, h, w, ctx, draggable);  
        this.#text = text;
        this.name = "textbox"; 
        this.editing = false;
        // we need this reference here for the window listener 
        // if not there will be a multiple window event listener bug
        // more info here: https://stackoverflow.com/questions/10444077/javascript-removeeventlistener-not-working 
        this.inputHandler = this.inputHandler.bind(this);
        // user defined onEdit callback function see shapes/Shape.js for more context 
        this.editHandler = null; 
    }
    drawTextBox(){ 
        const lines = this.#text.split("\n");
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
    redrawTextBox(){
        this.clearBox(2, 2); 
        this.drawTextBox();
    }
    // will trigger an edit or stop edit functionality 
    toggleEditing(){
        this.editing = !this.editing; 
        if(this.editing){
            this.startEdit();  
        }else{
            this.stopEdit();
        }
    }
    startEdit(){
        this.#text += "|";
        this.redrawTextBox();
        window.addEventListener("keydown", this.inputHandler);  
    }
    stopEdit(){
        this.#text = this.#text.replace("|", ""); 
        this.redrawTextBox(); 
        window.removeEventListener("keydown", this.inputHandler);    
    }
    inputHandler(e){
        this.#text = this.#text.replace("|", ""); 
        if(e.key === "Backspace"){
            this.#text = this.#text.slice(0, this.#text.length -1); 
        }
        if(e.key === "Enter"){
            this.#text += "\n"; 
        }
        if(e.key.length === 1){
            this.#text +=  e.key; 
        }
        this.#text += "|";
        this.redrawTextBox();
        // call user defined onEdit callback function
        if(this.editHandler){
            this.editHandler.callback(...this.editHandler.args); 
        }
    }
    // function user calls to define their own callback that fires during editing to this object 
    onEdit(callback, args){
        this.editHandler = {callback, args};         
    }
    // function user calls to get the text value of the box, want to keep text field private. 
    getValue(){
        return this.#text.replace("|", ""); 
    }


}
export {TextBox}; 