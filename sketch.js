let num = 2000;
let range = 30;

let ax = [];
let ay = [];
let contents = "";


//H
let distribution = new Array(360);
//C


 function preload() {
glw = loadImage('glow.png');
  spk = loadImage('spikes.png');
  flw = loadImage('flower.png')
  flr = loadImage('flare.png')
  zag = loadImage('zag.png')
  nse = loadImage('noise.png')
  
  vin = loadImage('vin.png')
  scn = loadImage('lines.png')
  ppr = loadImage('paper.png')
  sqg1 = loadImage('squig1.png')
  sqg2 = loadImage('squig2.png')
  sqg3 = loadImage('squig3.png')
  sqg4 = loadImage('squig4.png')
  sqg5 = loadImage('squig5.png')
  sqg6 = loadImage('squig6.png')

  hl1 = loadImage('holo1.png')
  hl2 = loadImage('holo2.png')
  hl3 = loadImage('holo3.png')
  hl4 = loadImage('holo4.png')
 hl5 = loadImage('holo5.png')
  hl6 = loadImage('holo6.png')
  hl7 = loadImage('holo7.png')
 }


function setup() {
  createCanvas(800, 600);

  rectMode(CENTER);

  bgr = random (255);
  bgg = random (255);
  bgb = random (255);

  lineR=random(255)
  lineG=random(255)
  lineB=random(255)

  background(bgr,bgg,bgb);

    for ( let i = 0; i < num; i++ ) {
    ax[i] = width / 2;
    ay[i] = height / 2;
  }

xw = random(width);
yw = random(height);
xw2 = random(width);
yw2 = random(height);
xw3 = random(width);
yw3 = random(height);
xw4 = random(width);
yw4 = random(height);




 x = width/2
 y = height/2
x2 = width/2
y2 = height/2

yl = random(0,height);
xl = random(0,width);
ml =10
nl =10
pl =random(height)
ol =random(width)


}


function draw() {
  noStroke();

  push();
  blendMode(BLEND);
  frameRate(35);
  fill(255)
  rect(width/2,550,width,110)
  textWrap(CHAR);
  fill(0);
  textFont('futura');
  textSize(11);
  text(contents, 400, 500,790);
  pop();


//P
  if (keyIsDown(80)) {
   letterP();
  }

//L
   if (keyIsDown(76)) {
   letterL();
  }

//O
  if (keyIsDown(79)){
    letterO();
  }

//K
  if (keyIsDown(75)){
    letterK();
  }

//I
  if (keyIsDown(73)){
    letterI();
  }

//J
  if (keyIsDown(74)){
    letterJ();
  }

//U
  if (keyIsDown(85)){
    letterU();
 }
//H
   if (keyIsDown(72)){
    letterH();
 }
//M
  if (keyIsDown(77)){
    letterM();
 }
//Y
  if (keyIsDown(89)){
    letterY();
     }
//N
  if (keyIsDown(78)){
    letterN();
     }
//B
  if (keyIsDown(66)){
    letterB();
     }

//T
  if (keyIsDown(84)){
    letterT();
     }
//G
  if (keyIsDown(71)){
    letterG();
     }
//F
  if (keyIsDown(70)){
    letterF();
     }
//R
  if (keyIsDown(82)){
    letterR();
     }

//V
  if (keyIsDown(86)){
    letterV();
     }
//C
    if (keyIsDown(67)){
    letterC();
     }

//X
  if (keyIsDown(88)){
    letterX();
     }

//Z
  if (keyIsDown(90)){
    letterZ();
     }
//W
  if (keyIsDown(87)){
    letterW();
     }
//Q
  if (keyIsDown(81)){
    letterQ();
     }
//E
  if (keyIsDown(69)){
    letterE();
     }

//D
  if (keyIsDown(68)){
    letterD();
     }
//A
   if (keyIsDown(65)){
    letterA();
     }
//S
   if (keyIsDown(83)){
    letterS();
     }


  //filters

  //1
   if (keyIsDown(49)){
    digit1();
 }
  //2
   if (keyIsDown(50)){
    digit2();
 }
  //3
   if (keyIsDown(51)){
    digit3();
 }

   if (keyIsDown(52)){
    digit4();
 }

 if (keyIsDown(53)){
    digit5();
 }

 if (keyIsDown(54)){
    digit6();
 }

 if (keyIsDown(55)){
    digit7();
 }

 if (keyIsDown(56)){
    digit8();
 }

 if (keyIsDown(57)){
    digit9();
 }

 if (keyIsDown(48)){
    digit0();
 }


}


//K litle white lines
 function letterK(){
   colorMode(RGB);
   blendMode(BLEND);
  x = random(width)
  y = random(height-110)
  fill(255);
  rect(x,y,40,5);
   frameRate(30);
}
//O random color/spot 50x50 squares
function letterO(){
  colorMode(RGB);
  blendMode(BLEND);
  xb = random(width)
  yb = random(height-110)
  fill(random(255),random(255),random(255));
  rect(xb,yb,50,50)
  frameRate(10);
}
//P double random color walkers
function letterQ(){
  colorMode(RGB);
blendMode(BLEND);
  stroke((random(255)),(random(255)),(random(255)));
  strokeWeight(30);
  point(xw, yw);
  const r = floor(random(4));
  switch (r) {
    case 0:
      xw = xw + (random(10,30));
      break;
    case 1:
      xw = xw - (random(10,30));
      break;
    case 2:
      yw = yw + (random(10,30));
      break;
    case 3:
      yw = yw - (random(10,30));
      break;
  }
  if(xw<-1){
    xw=width
  }
  if(xw>width+1){
    xw=0
  }
  if(yw<-1){
    yw=height-110
  }
  if(yw>height-110){
    yw=0
  }
    stroke((random(255)),(random(255)),(random(255)));
  strokeWeight(30);
  point(xw2, yw2);
  const r2 = floor(random(4));
  switch (r2) {
    case 0:
      xw2 = xw2 + (random(10,30));
      break;
    case 1:
      xw2 = xw2 - (random(10,30));
      break;
    case 2:
      yw2 = yw2 + (random(10,30));
      break;
    case 3:
      yw2 = yw2 - (random(10,30));
      break;
  }
  if(xw2<-1){
    xw2=width
  }
  if(xw2>width+1){
    xw2=0
  }
  if(yw2<-1){
    yw2=height-110
  }
  if(yw2>height-110){
    yw2=0
  }

      stroke((random(255)),(random(255)),(random(255)));
  strokeWeight(30);
  point(xw3, yw3);
  const r3 = floor(random(4));
  switch (r3) {
    case 0:
      xw3 = xw3 + (random(10,30));
      break;
    case 1:
      xw3 = xw3 - (random(10,30));
      break;
    case 2:
      yw3 = yw3 + (random(10,30));
      break;
    case 3:
      yw3 = yw3 - (random(10,30));
      break;
  }
  if(xw3<-1){
    xw3=width
  }
  if(xw3>width+1){
    xw3=0
  }
  if(yw3<-1){
    yw3=height-110
  }
  if(yw3>height-110){
    yw3=0
  }

      stroke((random(255)),(random(255)),(random(255)));
  strokeWeight(30);
  point(xw4, yw4);
  const r4 = floor(random(4));
  switch (r4) {
    case 0:
      xw4 = xw4 + (random(10,30));
      break;
    case 1:
      xw4 = xw4 - (random(10,30));
      break;
    case 2:
      yw4 = yw4 + (random(10,30));
      break;
    case 3:
      yw4 = yw4 - (random(10,30));
      break;
  }
  if(xw4<-1){
    xw4=width
  }
  if(xw4>width+1){
    xw4=0
  }
  if(yw4<-1){
    yw4=height-110
  }
  if(yw4>height-110){
    yw4=0
  }
  frameRate(25);
}
//L line spew machine (might cut later)
function letterL(){
  colorMode(RGB);
  blendMode(LIGHTEST);
  stroke(random(255),random(255),random(255));
  strokeWeight(10);

  rw=random(width)
  rh=random(height)

  yl = yl + (3*ml);
  if (yl < 0) {
    ml = ml*(-1);
  }
  if (yl > rh) {
    ml = ml*(-1);
  }


  line(0, yl, ol/2, pl/2);
  line(rw, yl, ol/2, pl/2);

  line(0, yl, ol/2, rh);
  line(rw, yl, ol/2, rh);

  line(0, yl, ol/2, 0);
  line(rw, yl, ol/2, 0);

  xl = xl + (3*nl);
  if (xl < 0) {
    nl = nl*(-1);
  }
  if (xl>width) {
    n = nl*(-1);
  }
ol=random(width)
  pl=random(height)
  frameRate(10);
}
//I squiggle drawer - kinga broken
function letterW(){
  colorMode(RGB);
  blendMode(BLEND);

   for ( let i = 1; i < num; i++ ) {
    ax[i - 1] = ax[i];
    ay[i - 1] = ay[i];
  }


  ax[num - 1] += random(-range, range);
  ay[num - 1] += random(-range, range);


  ax[num - 1] = constrain(ax[num - 1], 0, width);
  ay[num - 1] = constrain(ay[num - 1], 0, height-110);


  for ( let j = 1; j < num; j++ ) {
    let val = j / num * 204.0 + 51;
    strokeWeight(5)
    stroke(lineR,lineG,lineB);
    line(ax[j - 1], ay[j - 1], ax[j], ay[j]);
  }
  frameRate(30);
}
//J blue rotated squares
function letterJ(){
colorMode(RGB);
  translate(width/2,0)
  blendMode(BLEND);
  fill(0, 42, 255)
  rotate(random(360));
rect(random(width),random(height-110),30,30);

  frameRate(25);
}
//U blended squares
function letterU(){
  colorMode(RGB);
  blendMode(OVERLAY);
  noStroke();
  fill(255, 0, 212);
  rect(random(width),random(height-110),100,100);
}
//H random starbursts
function letterH(){
  colorMode(RGB);
  blendMode(BLEND);
  for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(0, 15));
   }

  rw=random(width)
  rh=random(height-110)

translate(rw, rh);
  for (let i = 0; i < distribution.length; i++) {
     rotate(TWO_PI / distribution.length);
    strokeWeight(1)
     stroke(255,208,0);
     let dist = abs(distribution[i]);
     line(0, 0, dist, 0);
   }
}
//M random horizontal lines
function letterM(){
  colorMode(RGB);
  blendMode(BLEND);
  stroke(random(255),random(255),random(255))
  strokeWeight(3);
  line(0,random(height-110),width,random(height-110))
  frameRate(20);

}
//Y stroke bubbles
function letterY(){
  colorMode(RGB);
  blendMode(BLEND)
  ellipseMode(CENTER)
  noFill();
  stroke(255);
  strokeWeight(3);
  ellipse (random(width),random(height-110),random(10,80));
}
//N black triangles
function letterN(){
  colorMode(RGB);
  blendMode(BLEND)
  x=random(width);
  y=random(height-110);
  fill(0)
triangle(x,y,x+40,y,x+20,y+20)
  frameRate(30);
}
//B green stars
function letterX(){
  colorMode(RGB);
  blendMode(BLEND);
  noStroke();
  fill(77, 209, 137);
  star(random(width), random(height-110), 40, 60, 40);
  frameRate(5);
}
//T cool pink spike wheel thing
function letterT(){
  blendMode(BLEND);
  frameRate(20);
  rotate(random(-360,360))
  x=random(width);
  y=random(height-110);
  image(spk,x,y,80,80)
}
//G little black x
function letterG(){
  colorMode(RGB);
  xg=random(width);
  yg=random(height-110);
  frameRate(20);
  blendMode(BLEND);
  noFill();
  strokeWeight(10);
  stroke(0);
  line(xg,yg,xg+10,yg+10);
  line(xg,yg,xg-10,yg+10);
  line(xg,yg,xg+10,yg-10);
  line(xg,yg,xg-10,yg-10);

}
//F lil purple flower machine
function letterF(){
  x=random(width)
  y=random(height-110)
image(flw,x,y,70,70)
}
//R line quad shape things?
function letterR(){
  colorMode(RGB);
  blendMode(BLEND);
  frameRate(10);
  noFill();
  stroke(255);
  strokeWeight(1);
  quad( random(0,400),random(0,300), random(0,400), random(300,490),random(400,800),random(300,490), random(400,800), random(0,300))

}
//V gradient orbs
function letterB(){
  blendMode(BLEND);
    dim = width / random(8,12);
  colorMode(HSB, 360, 10, 10);
  noStroke();
  ellipseMode(RADIUS);
  frameRate(10);
  x=random(width)
  y=random(height-110)
  drawGradient(x, y);
}
//C glow image
function letterV(){
  x=random(width)
  y=random(height)
  blendMode(BLEND)
   image(glw,x,y,180,180);
}
//X little curves
function letterC(){
  blendMode(BLEND);
  frameRate(15);
  x=random(width);
  y=random(height-110);
  blendMode(BLEND);
  frameRate(15);
  x=random(width);
  y=random(height-110);
  fill(random(255),random(255),random(255))
  ellipse(x+11,y-5,23);
  ellipse(x+29,y-5,23);
  triangle(x,y,x+40,y,x+20,y+20)
}
//Z zig zags
function letterZ(){
x=random(width);
y=random(height-100);
rotate(random(-360,360))
image(zag,x,y,50,50);
}
//W little flares
function letterI(){
  blendMode(BLEND)
  frameRate(15);
  x=random(width)
  y=random(height)
  image(flr,x,y,50,50);
}
//Q random noise lines
function letterP(){
  frameRate(5);
  blendMode(BLEND);
  colorMode(RGB);



  inc = 0.005;
  start = random(0,1000);
  stroke(0);
  strokeWeight(3)
  noFill();
  beginShape();
  let xoff = start;
  for (let x = 0; x < width; x++) {
    stroke(0);
    //let y = random(height);
    let y = noise(xoff) * height;
    vertex(x, y);

    xoff += inc;
  }
  endShape();

  start += inc;
}
//E squiggles
function letterE(){
  b = random(6);
  x = random(width);
  y=random(height-100);
  hw = random(50,90);


  frameRate(15);
  blendMode(BLEND);
  colorMode(RGB);

  if(b<1){
  image(sqg1,x,y,hw,hw)
}

if(b>1&b<2){
  image(sqg2,x,y,hw,hw)

}

if(b>2&b<3){
  image(sqg3,x,y,hw,hw)
}

if(b>3&b<4){
  image(sqg4,x,y,hw,hw)
}

if(b>4&b<5){
  image(sqg5,x,y,hw,hw)
}
if(b>5&b<6){
  image(sqg6,x,y,hw,hw)
}

}
//D polygon with 6 different cases of color and blending
function letterD(){
  b=random(6);
  x=random(width);
  y=random(height-100);
  frameRate(10);


    if(b<1){
  fill(255, 89, 94)
  blendMode(MULTIPLY)
  s=3
}

if(b>1&b<2){
  fill(25, 130, 196)
  blendMode(SCREEN)
  s=7

}

if(b>2&b<3){
  fill(176, 254, 118)
  blendMode(SOFT_LIGHT)
  s=13
}

if(b>3&b<4){
  fill(174, 217, 224);
  blendMode(OVERLAY)
  s=10
}

if(b>4&b<5){
  fill(106, 76, 147)
  blendMode(DARKEST)
  s=6
}
if(b>5&b<6){
  fill(244, 185, 66)
  blendMode(BURN)
  s=8
}
    polygon(x, y, 40, s);
}
//A green blended triangles
function letterA(){
 blendMode(BLEND);
  colorMode(RGB);
  frameRate(15);
  rotate(random(-360,360));

  x= random (width);
  y = random (height - 100);

  r = random(255)
  g = random(255)
  b = random(255)

  fill(r,g,b)
  noStroke();

  ellipse(x+25,y,10)
  ellipse(x,y-30,10)
  ellipse(x,y+20,10)
  ellipse(x-13,y-20,5)
  ellipse(x-18,y-10,10)
  ellipse(x-15,y+15,5)
  ellipse(x-25,y,5)
  ellipse(x+20,y+27,5)
  ellipse(x+13,y-15,5)
  ellipse(x+15,y+8,5);

  stroke(r,g,b);
  strokeWeight(2);
  line(x,y,x+25,y);
  line(x,y,x-25,y);
  line(x,y,x,y-30);
  line(x,y,x,y+20);
  line(x,y,x+20,y+27)
  line(x,y,x+13,y-15)
  line(x,y,x-13,y-20)
  line(x,y,x-15,y+15)
  line(x,y,x-18,y-10)
  line(x,y,x+15,y+8)

}
//S lil checkerboard things
function letterS(){
  frameRate(15);
  blendMode(BLEND);
  colorMode(RGB);
  noStroke();

  x = random (width);
  y = random (height-100);
  fill(random(255),random(255),random(255))
  rect(x,y,10,10)
  rect(x+10,y+10,10,10)
  rect(x+20,y+20,10,10)
  rect(x+20,y,10,10)
  rect(x,y+20,10,10)

  fill(random(255),random(255),random(255))
  rect(x+10,y,10,10)
  rect(x+10,y+20,10,10)
  rect(x+20,y+10,10,10)
  rect(x,y+10,10,10)
}



//FILTERS
//invert
function digit1(){
  blendMode(DIFFERENCE)
  fill(255);
  rect(400,245,width,height-100)
  frameRate(5);
}
//darkest color random
function digit2(){
  blendMode(DARKEST);
  fill(random(0,255),random(0,255),random(0,255));
  rect(400,245,width,height-100)
  frameRate(5);
}
//gradient color overlay
function digit3(){
  frameRate(5);
  blendMode(SOFT_LIGHT)
c1=color(random(255),random(255),random(255));
c2=color(random(255),random(255),random(255));

   for(y=0;y<height-100;y++){
    n=map (y,0,height,0,1)
    newc = lerpColor(c1,c2,n)
    stroke(newc);
    line(0,y,width,y)
   }

}
//yellow+black gradient map thing?
function digit4(){
blendMode(DARKEST);
fill(250, 131, 52);
rect(400,245,width,height-100)
blendMode(LIGHTEST)
fill(0);
rect(400,245,width,height-100)
}
//noise filter
function digit5(){
  frameRate(5)
  blendMode(MULTIPLY)
  image(nse,0,0);
   tint(255,20);
}
//Cloud filter
function digit6(){
 frameRate(5);
 blendMode(MULTIPLY)
 image(vin,0,0);
}
//scan lines
function digit7(){
 frameRate(5);
 blendMode(SOFT_LIGHT)
 image(scn,0,0);
}
//paper texture
function digit8(){
  frameRate(1);
  blendMode(OVERLAY)
  //blendMode(SOFT_LIGHT)
  image(ppr,0,0);
}
//1 of 6 color overlays
function digit9(){

  b=random(6)
  if(b<1){
  fill(59, 255, 206)
}

if(b>1&b<2){
  fill(216, 89, 255)

}

if(b>2&b<3){
  fill(255, 153, 89)
}

if(b>3&b<4){
  fill(220, 255, 107);
}

if(b>4&b<5){
  fill(255, 107, 149)
}
if(b>5&b<6){
  fill(144, 138, 255)
}


// fill(59, 255, 206)
  blendMode(DARKEST);
  frameRate(5);
  noStroke()
  rect(400,245,width,height-100)
}
// 1 of 7 random holographic overlays
function digit0(){
 blendMode(SOFT_LIGHT)
 frameRate(5);
 colorMode(RGB);
 rotate(0);

  b=random(7)

  if(b<1){
  image(hl1,0,-5)
}
if(b>1&b<2){
  image(hl2,0,-5)
}
if(b>2&b<3){
  image(hl3,0,-5)
}
if(b>3&b<4){
  image(hl4,0,-5)
}
if(b>4&b<5){
  image(hl5,0,-5)
}
if(b>5&b<6){
  image(hl6,0,-5)
}
  if(b>6&b<7){
  image(hl7,0,-5)
}
}


//misc support functions

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

function keyTyped(){
  //contents = contents + key;
  contents += key;
}

function keyReleased(){
  if (keyCode == BACKSPACE){
  contents = contents.substring(0, contents.length -1);}}

function drawGradient(x, y) {
  let radius = dim / 2;
  let h = random(0, 360);
  for (let r = radius; r > 0; --r) {
    fill(h, 10, 10);
    ellipse(x, y, r, r);
    h = (h + 3) % 360;
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
