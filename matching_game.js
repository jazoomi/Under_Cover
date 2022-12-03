var shapeCheck = 0; // this will keep track what shape number to check when a shape is pressed in attempt to match
var url = "http://localhost:3000/post";
var attempt = 0;
//button press
function Game(){
    document.getElementById("scores").innerHTML = "";
    shapeCheck = 0;
    playerName = document.getElementById("fname").value;
    //post req for the leaderboard
    $.post(url+'?data='+JSON.stringify({
        'action':'leaderboard',
        }),
        response);

    if (playerName == ""){
    alert (" please enter a name");
    }
    else{
    document.getElementById("fname").disabled = true;
    document.getElementById("start-game").disabled = true;
    

    $.post(url+'?data='+JSON.stringify({
        'name': playerName, //client's identity on the server
        'action':'generateShape',
        'button': "reset"}),
        response);
    

    setTimeout(() => {
        document.getElementById("rectangle").style.pointerEvents = "all";
        document.getElementById("square").style.pointerEvents = "all";
        document.getElementById("triangle").style.pointerEvents = "all";
        document.getElementById("circle").style.pointerEvents = "all";
    }, 1500);
    }
}

//functions for shape buttons
function rectangle(n1){
    document.getElementById("rectangle").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "#555"}, 500);
    attempt = 1;
   checkShape(attempt);
    
}
function circle(n2){
    
    document.getElementById("circle").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("circle").style.backgroundColor = "#555"}, 500);
    attempt = 2;
  checkShape(attempt);
}

function square(n3){
    document.getElementById("square").style.backgroundColor ="yellow";
    setTimeout(function(){document.getElementById("square").style.backgroundColor = "#555"}, 500);
    attempt = 3;
    checkShape(attempt);
}

function triangle(n4){
    document.getElementById("triangle").style.borderBottomColor ="yellow";
    setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "#555"}, 500);
    attempt =4
    checkShape(attempt);
}

//interates through all the shapes up until now
function iteration(shapes){
    if (shapes.length == 1){

    }
    else {

    document.getElementById("lose").innerHTML = "Congratuatlions !";
    }
    var i = 0;
    myInterval = setInterval(function(){ 
        if ( shapes[i] == 1){
            document.getElementById("rectangle").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("rectangle").style.backgroundColor = "#555"}, 500);
        }
        else if (shapes[i] == 2){
          document.getElementById("circle").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("circle").style.backgroundColor = "#555"}, 500);
        }
        else if (shapes[i] == 3){
            document.getElementById("square").style.backgroundColor = "red"
            setTimeout(function(){document.getElementById("square").style.backgroundColor = "#555"}, 500);
        }
        else {
            document.getElementById("triangle").style.borderBottomColor = "red"
            setTimeout(function(){document.getElementById("triangle").style.borderBottomColor = "#555"}, 500);
        }
        i++;
        document.getElementById("lose").innerHTML = i + " Round: " + shapes.length;

        if (i >= shapes.length){
            clearInterval(myInterval);
        }
    }, 1000);

    
}

//checks if selected chape is correct
function checkShape(n){    
    document.getElementById("lose").innerHTML += "<br>" + (shapeCheck+1);

    $.post(url+'?data='+JSON.stringify({
        'action':'evaluate',
        'attempt': n
        }),
        response);


}
function response(data, status){

    var response = JSON.parse(data);
    
    if (response['action'] == 'generateShape'){
        iteration(response.shapes);


    }
    else if (response['action'] == "correct"){

        Check(response.shapes);
    }

    else if (response['action'] == 'lose' ){
        for (var i = 0; i < response.names.length; i++) {
        document.getElementById("scores").innerHTML += response.names[i]  + "  " + response.shapes.length + "<br>";
        }
    }
}

function Check(shapes){
    if (shapes[shapeCheck] == attempt){
        shapeCheck++;
        if(shapeCheck == shapes.length){
            document.getElementById("rectangle").style.pointerEvents = "none";
            document.getElementById("square").style.pointerEvents = "none";
            document.getElementById("triangle").style.pointerEvents = "none";
            document.getElementById("circle").style.pointerEvents = "none";
            shapeCheck = 0;
            
            
            //send request to make a new shape
            $.post(url+'?data='+JSON.stringify({
                'action':'generateShape'
                }),
                response);

            setTimeout(() => {
                document.getElementById("rectangle").style.pointerEvents = "all";
            document.getElementById("square").style.pointerEvents = "all";
            document.getElementById("triangle").style.pointerEvents = "all";
            document.getElementById("circle").style.pointerEvents = "all";
            }, ((1+ shapes.length) *1000)+ 500);
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
        document.getElementById("scores").innerHTML += playerName  + "  " + shapes.length + "<br>";


    }
}


//themes of the page
function Theme(n){
    if ( n == 1){
        document.body.style.backgroundColor = "green";
    }
    else if (n == 2){
        document.body.style.backgroundColor = "blue";
    }
    else {
        document.body.style.backgroundColor = rgb(245, 237, 177);
        // document.body.style.backgroundColor = "yellow";
    }

}
