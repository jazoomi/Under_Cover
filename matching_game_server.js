var amount = 0; // this is the length of the shapes ( the round)
var shapes = {}; //this is the shape order, 1 isrectangle, 2 is circle, 3 square, 4 triangle



//add a new shape only to the end of the array
function generateShape() {
    
    var shape = Math.floor(Math.random()*4 + 1);
    if ( shape == 1){
        shapes[amount] = shape;
        amount++;
    }
    else if ( shape == 2){
        shapes[amount] = shape;
        amount++;
    }
    else if (shape == 3){
        shapes[amount] = shape;
        amount++;
    }
    else {
        shapes[amount] = shape;
        amount++;
    }
}