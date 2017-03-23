TinyTurtle.apply(window, [undefined, 400, 400]);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(size){
    right(120);
    forward(size);
    right(120);
    forward(size);
    right(120);
    forward(size);
}

function rectangle(length, length2){
    right(90);
    forward(length);
    right(90);
    forward(length2);
    right(90);
    forward(length);
    right(90);
    forward(length2);
}

function house(){
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(30);
    forward(50);
    right(120);
    forward(50);
    right(120);
    forward(50);
}
    
function pentagon(){
    forward(25);
    right(60);
    forward(25);
    right(60);
    forward(25);
    right(60);
    forward(25);
    right(90);
    forward(43);
    right(90);
}    

function hexagon(){
    forward(50);
    right(60);
    forward(50);
    right(60);
    forward(50);
    right(60);
    forward(50);
    right(60);
    forward(50);
    right(60);
    forward(50);
}
// Type your function call below

hexagon();


stamp();

