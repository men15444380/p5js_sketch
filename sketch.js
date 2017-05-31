
var cnv;
var g;

var t = 0;

function setup() {

  cnv= createCanvas(400, 600);
  cnv.touchMoved(changeGray);
  // background(0, 0, 255);
  g = 400 ;
 
}

function draw() {
  background(color(0, 0, 255));
  
    var c = color(255, 204, 0);  
fill(c);  
noStroke(); 
  triangle(17, 0, 400, 0, 400, 375);
  
var c = color(255,20,147);  
fill(c);  
noStroke(); 
triangle(0, 0, 0, 245, 250, 0);
  
var c = color(255,20,147)
;fill(c);  
noStroke(); 
triangle(0, 600, 600, 600, 600, 0);

// var c = color(64,224,208);  

if(t % 2 == 0) {
  c = color(255,0,0);
} else {
  c = color(255,0,255);
}

fill(c);
noStroke();  
rect(135, 113, 176, 176);

// rect(g);
}

// this function fires only when cnv is clicked
function changeGray() {
  if(g=400) 
  mouseClicked=this.changeGrey
  random(0, 255);

}

function mousePressed() {
  t++;
  console.log(t);
}
  
