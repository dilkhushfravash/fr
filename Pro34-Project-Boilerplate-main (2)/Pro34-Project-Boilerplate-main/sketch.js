const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;




function setup() {
  engine = Engine.create();
  world = engine.world;
  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if(isMobile){
     canW = displayWidth;
      canH = displayHeight;
       createCanvas(displayWidth+80, displayHeight);
       } else { canW = windowWidth;
         canH = windowHeight;
          createCanvas(windowWidth, windowHeight);
         };
         ball = new Ball(width/2,height/2,80,80);
         f1 = new Box(width/2,height/2-85,150,20);
         f2 = new Box(width/2+85,height/2,20,150);
         f3 = new Box(width/2-85,height/2,20,150)
         v = new Box(width/2,height/2+300,80,80)
         var baroptions ={
           isStatic:true
         }
         fa = new Box(width/2,height/2-140,20,150)
         fb = new Box(width/2+65,height/2-210,150,20)
         fc = new Box(width/2+65,height/2-150,150,20)
         
 bar = Bodies.rectangle(width/2,height/2 + 85,150,20,baroptions)
World .add(world,bar)



















}


function draw() 
{
  background(51);
  Engine.update(engine);
ball.show();
f1.show();
f2.show();
f3.show();
v.show();
fa.show();
fb.show();
fc.show();
rectMode(CENTER);
rect(bar.position.x,bar.position.y,150,20)




}

function keyPressed(body) {
  if (keyCode === 32) {
      Matter.Body.setStatic(bar, false)
  }
}