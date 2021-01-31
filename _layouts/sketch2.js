var myp5 = new p5( function( sketch ) {

  var c = 100;
  var radius = 300;
  var radius1 = 140;
  var noiseScale = 0.02;
  var speed = 0.03;
  var a = 0;

  sketch.setup = function(){
  var canvas = sketch.createCanvas(windowWidth,windowHeight-70);
  //canvas.parent("sketch-holder");
  canvas.position(0, 72);
  canvas.style('z-index','-1');
  }

sketch.draw = function(){
  sketch.background(255);
  sketch.noStroke();
  sketch.translate(0,height/2);

  sketch.fill(52,180);
  sketch.spinner(20, 120, 8, sketch.mouseY, 0.08);

  sketch.fill(242,117,129,180);
  sketch.spinner(100, 40, 10, sketch.mouseY, 0.001);

  sketch.fill(95,244,162,180);
  sketch.spinner(200, 80, 10, sketch.mouseY, 0.5);

  a += speed;
 }
sketch.spinner = function(c, b, sz, radius, n){
 for(var i = 0; i < c; i++){
   var x1 = b*sin(i+a)+radius*sin(i*TWO_PI/c)*noise(n);
   var y1 = b*cos(i+a)+radius*cos(i*TWO_PI/c)*noise(n);
   var d = sqrt(sq(x1)+sq(y1));
   sketch.ellipse(x1, y1, d/sz, d/sz);
   n+=0.1;
    }
  }
sketch.windowResized = function() {
    sketch.resizeCanvas(windowWidth, windowHeight);
  }
}
);
