const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine1,world1;
var box1,box2,ground;


function setup() {
  createCanvas(800,400);
  engine1=Engine.create();
  world1=engine1.world;
  box1=new Box(200,100,50,50);
  box2=new Box(220,50,50,100);
  ground=new Ground(400,390,800,20);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine1);
  box1.display();
  box2.display();
  ground.display();

  drawSprites();
}