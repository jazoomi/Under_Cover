
var shapes = []; //this is the shape order, 1 isrectangle, 2 is circle, 3 square, 4 triangle
var express = require('express');
const { json } = require('express/lib/response');
var shapeCheck = 0;
var app = express();
var names = []; 

app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");


    var z = JSON.parse(req.query['data']);
    
    if (z['button'] == 'reset'){
        shapes = [];
        shapeCheck = 0;
        names[names.length] = z['name']
        
    }


    if (z['action'] == 'generateShape') {
        generateShape();


        var jsontext = JSON.stringify({
            'shapes' : shapes,
            'action' : 'generateShape'
        });

        res.send(jsontext);

    }
    else if ( z['action'] == 'evaluate'){

        var jsontext = JSON.stringify({
            'shapes' : shapes,
            'action' : 'correct',

        });

        res.send(jsontext);

    }

    else if ( z['action'] == 'leaderboard'){

        var jsontext = JSON.stringify({
            'action' : 'lose',
            'names': names,
            'shapes': shapes
        });

        res.send(jsontext);

    }


}).listen(3000);




//add a new shape only to the end of the array
function generateShape() {
    
    var shape = Math.floor(Math.random()*4 + 1);
    
    shapes[shapes.length] = shape;
}
