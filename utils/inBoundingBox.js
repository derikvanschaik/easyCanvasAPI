// determines if a point is within a bounding box's set of points  
function inBoundingBox(x, y, targetX, targetY, targetH, targetW){
    return x >= targetX && x<= (targetX + targetW)
        && 
     y >= targetY && y <= (targetY + targetH); 
}
export {inBoundingBox} 