var amount = 0; // this is the length of the shapes ( the round)
var shapes = {}; //this is the shape order, 1 isrectangle, 2 is circle, 3 square, 4 triangle
var shapeCheck = 0; // this will keep track what shape number to check when a shape is pressed in attempt to match
var names = {}; //this is an array that stores the names
var players = 0; // this is the amount of people on the leaderboard
function Game(){
    amount = 0;
    shapes = {};
    shapeCheck = 0;
    generateShape();
    iteration();
    names [players] = document.getElementById("fname").value;
    document.getElementById("fname").disabled = true;
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
    var i = 0;
    myInterval = setInterval(function(){ 

        if ( shapes[i] == 1){
            document.getElementById("rectangle").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "#555"}, 1000);
        }
        else if (shapes[i] == 2){
          document.getElementById("circle").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("circle").style.backgroundColor = "#555"}, 1000);
        }
        else if (shapes[i] == 3){
            document.getElementById("square").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("square").style.backgroundColor = "#555"}, 1000);
        }
        else {
            document.getElementById("triangle").style.borderBottomColor = "red"
            setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "#555"}, 1000);
        }
        i++;
        document.getElementById("lose").innerHTML = i + " Round: " + amount;

        if (i >= amount){
            clearInterval(myInterval);
        }
    }, 2000);

    
    
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
        document.getElementById("start-game").disabled = false; //turn the button back on
        document.getElementById("fname").disabled = false; //turn the textbox back on
        document.getElementById("scores").innerHTML +=  names[players] + " " + amount;
        players++;
    }
}