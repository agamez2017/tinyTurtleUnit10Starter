/* global TinyTurtle */
/* global forward */
/* global right */
/* global stamp*/
/* global int*/

TinyTurtle.apply(window);

function square(x){
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
right(90);
forward(x);
}

function triangle(x){

  right(120);
  forward(x);
  right(120);
  forward(x);
  right(120);
forward(x);
}
function hexagon(){
    right(90);
    forward(10);
    right(60);
    forward(10);
    right(60);
    forward(10);
    right(60);
    forward(10);
    right(60);
    forward(10);
    right(60);
    forward(10);
}
function circle(){
    var a;
    for(a=0;a<360;a++){
        forward(1);
        right(1);
        
    }
}

function shape(size, angle){
    forward(size);
    right(angle);
    forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);forward(size);
    right(angle);
}

// Type your function call below



circle();
shape(20,5);