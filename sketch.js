
var order = [];
var points = [];
var grid_size = 3;
var cell_size = 20;

function setup(){
var canvas = createCanvas(74,50);
canvas.parent("sketch-holder");
//canvas.position(0, 0);
canvas.style('z-index','-1');
for(var k = 0; k < grid_size*grid_size; k++){
  order[k] = k;
}
order = shuffle(order);
for(var i = 0; i < grid_size*grid_size; i++){
  var x = (i % grid_size)*cell_size;
  var y = floor(i / grid_size)*cell_size;
  points[i] = [x,y];
  }
  background(255);
  strokeWeight(1);
  stroke(0);
  noLoop();
}

function draw(){
background(255);
push();
translate(width/2-10,height/2);
translate(-(grid_size-1)*cell_size/2, -(grid_size-1)*cell_size/2);
draw_char(order);
pop();

 function draw_char(ord){
   var order = ord;
   noFill();
   strokeWeight(10);
   strokeCap(ROUND);
   strokeJoin(ROUND);

   beginShape();
   for(var j = 0; j < order.length-1; j++){
     x1 = points[order[j]][0];
     y1 = points[order[j]][1];
     x2 = points[order[j+1]][0];
     y2 = points[order[j+1]][1];
     vertex(x1, y1);
     if(dist(x1, y1, x2, y2) > cell_size*2 ){
       endShape(CLOSE);
       beginShape();
     }
    }
   endShape();
  }

order = shuffle(order);

};

function mouseReleased() {
   redraw(5);
 };
