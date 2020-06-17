const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
function setup() {
  createCanvas(1300, 700);
  rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	paperObject=new Paper(100,550,70);
	groundObject=new Ground(width/2,670,width,20);
	dustbinObj=new Box(1000,520);
	Engine.run(engine); 
}
function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  groundObject.display();
  dustbinObj.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:700,y:-1590});

    
  	}
}
