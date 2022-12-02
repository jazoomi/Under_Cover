var shapes = []; //this is the shape order, 1 isrectangle, 2 is circle, 3 square, 4 triangle
var shapeCheck = 0; // this will keep track what shape number to check when a shape is pressed in attempt to match
var names = []; //this is an array that stores the names
// button press
function Game(){
    shapes = [];
    shapeCheck = 0;
    generateShape();
    iteration();
    names [names.length] = document.getElementById("fname").value;
    document.getElementById("fname").disabled = true;
    document.getElementById("start-game").disabled = true;
    
    setTimeout(() => {
      document.getElementById("rectangle").style.pointerEvents = "all";
      document.getElementById("square").style.pointerEvents = "all";
      document.getElementById("triangle").style.pointerEvents = "all";
      document.getElementById("circle").style.pointerEvents = "all";
  }, 3000);
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
        document.getElementById("lose").innerHTML = i + " Round: " + shapes.length;

        if (i >= shapes.length){
            clearInterval(myInterval);
        }
    }, 2000);

    
    
}
//add a new shape only to the end of the array
function generateShape() {
    
    var shape = Math.floor(Math.random()*4 + 1);
    shapes.push(shape);
}
//checks if selected chape is correct
function checkShape(n){
    if (shapes[shapeCheck] == n){
        shapeCheck++;
        if(shapeCheck == shapes.length){
          document.getElementById("rectangle").style.pointerEvents = "none";
          document.getElementById("square").style.pointerEvents = "none";
          document.getElementById("triangle").style.pointerEvents = "none";
          document.getElementById("circle").style.pointerEvents = "none";
          shapeCheck = 0;
          
          generateShape();
          iteration()
          setTimeout(() => {
              document.getElementById("rectangle").style.pointerEvents = "all";
          document.getElementById("square").style.pointerEvents = "all";
          document.getElementById("triangle").style.pointerEvents = "all";
          document.getElementById("circle").style.pointerEvents = "all";
          }, shapes.length *3000);
        }
    }
    else{
      document.getElementById("rectangle").style.pointerEvents = "none";
      document.getElementById("square").style.pointerEvents = "none";
      document.getElementById("triangle").style.pointerEvents = "none";
      document.getElementById("circle").style.pointerEvents = "none";
      document.getElementById("lose").innerHTML = "Game over! you lose!";
      shapeCheck = -1;
      document.getElementById("start-game").disabled = false; //turn the button back on
      document.getElementById("fname").disabled = false; //turn the textbox back on
      document.getElementById("scores").innerHTML +=  names[names.length-1] + " " + shapes.length;
     
    }
}

function Theme(n){
    if ( n == 1){
        document.body.style.backgroundColor = "green";
    }
    else if (n == 2){
        document.body.style.backgroundColor = "blue";
    }
    else {
        document.body.style.backgroundColor = "yellow";
    }

}