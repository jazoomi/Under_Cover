var amount = 0; // this is the length of the shapes ( the round)
var shapes = []; //this is the shape order, 1 isrectangle, 2 is circle, 3 square, 4 triangle
var express = require('express');
const { json } = require('express/lib/response');
var app = express();
var name; 


app.post('/post', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");

    var z = JSON.parse(req.query['data']);
    
    if (z['action'] == 'generateShape') {
        generateShape();


        var jsontext = JSON.stringify({
            'shapes' : shapes

        });

        
        res.send(jsontext);

    }
    else if ( z['action'] == 'evaluate'){

        var jsontext = JSON.stringify({


        });

        res.send(jsontext);

    }
    else if ( z['action'] == 'leaderBoard'){
        names[names.length ] = z['name'];

        var jsontext = JSON.stringify({
            'leader' : name

        });

        res.send(jsontext);

    }
}).listen(3000);




//add a new shape only to the end of the array
function generateShape() {
    
    var shape = Math.floor(Math.random()*4 + 1);
    
    shapes[shapes.length] = shape;
}