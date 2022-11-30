var amount = 0;
var shapes = {};
var shapeCheck = 0;
function Game(){
    generateShape();
    iteration();

    document.getElementById("start-game").disabled = true;

}

//functions for shape buttons
function rectangle(n1){
    document.getElementById("rectangle").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "#555"}, 500);

   checkShape(n1);
    
}
function circle(n2){
    document.getElementById("circle").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("circle").style.backgroundColor = "#555"}, 500);

  checkShape(n2);
}

function square(n3){
    document.getElementById("square").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("square").style.backgroundColor = "#555"}, 500);

    checkShape(n3);
}

function triangle(n4){
    document.getElementById("triangle").style.borderBottomColor ="yellow";
    setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "#555"}, 500);

    checkShape(n4);
}

//interates through all the shapes up until now
function iteration(){
    document.getElementById("lose").innerHTML = shapes[amount] + "" +amount;

    for (var i = 0; i < amount; i++){

        if ( shapes[i] == 1){
            setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "red"}, 1000);
            setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "#555"}, 2000);
        }
        else if (shapes[i] == 2){
            setTimeout(function(){document.getElementById("circle").style.backgroundColor = "red"}, 1000);
            setTimeout(function(){document.getElementById("circle").style.backgroundColor = "#555"}, 2000);
        }
        else if (shapes[i] == 3){
            setTimeout(function(){document.getElementById("square").style.backgroundColor = "red"}, 1000);
            setTimeout(function(){document.getElementById("square").style.backgroundColor = "#555"}, 2000);
        }
        else {
            setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "red"}, 1000);
            setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "#555"}, 2000);
        }

    }
    
}
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
//checks if selected chape is correct
function checkShape(n){
    if (shapes[shapeCheck] == n){
        shapeCheck++;
        if(shapeCheck == amount){
            shapeCheck = 0;
            generateShape();
            iteration()
        }
    }
    else{
        document.getElementById("lose").innerHTML = "Game over! you lose!";
        shapeCheck = -1;
    }
}