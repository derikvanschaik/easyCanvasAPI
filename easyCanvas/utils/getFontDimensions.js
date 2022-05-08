function getFontDimensions(ctx, text){ 
    // it is important that the ctx.textBaseline is equal to 'top' for this to work...
    // more info here: https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics
    const metrics = ctx.measureText(text);  
    const width = metrics.width;
    const height = Math.abs(metrics.fontBoundingBoxDescent) +  Math.abs(metrics.fontBoundingBoxAscent); 
    return [width, height];  
}
export {getFontDimensions} 