class Line{
    constructor(fromX, fromY, toX, toY, ctx){
        this.fromX = fromX; 
        this.fromY = fromY; 
        this.toX = toX; 
        this.toY = toY; 
        this.ctx = ctx; 
    }
    drawLine(){
        this.ctx.beginPath();
        this.ctx.moveTo(this.fromX, this.fromY);
        this.ctx.lineTo(this.toX, this.toY);
        this.ctx.stroke();
    }
}
export {Line} 