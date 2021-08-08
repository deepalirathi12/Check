const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var engine;
var world;
var ground, tower,cannon, cannonBall;
var balls = []

function preload() {
  bgimg = loadImage("./assets/background.gif")
}



function setup()
{
  createCanvas(1200,600);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(600,598,1200,2)
  tower = new Tower(120,390,200,400)
  cannon = new Cannon(140, 110, 100, 50,-PI/3);
 

}

function draw() 
{
  Engine.update(engine)

  

  background("skyblue");
 
  image(bgimg,0,0,2700,1200)

  fill("brown")
  ground.display()
  fill("white")
  tower.display()
  cannon.display()
 
  
  for(var i = 0; i <= balls.length ; i=i+1){
    showCannonBalls(balls[i],i)
  }
 
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    cannonBall = new CB(cannon.x, cannon.y)
    balls.push(cannonBall)
  }
}

function showCannonBalls(ball, index){
  ball.display()
  if (ball.body.position.x >= width || ball.body.position.y >= height - 50) {
    Matter.World.remove(world, ball.body);
    balls.splice(index, 1);
  }
 
}

function keyReleased(){
  if(keyCode === DOWN_ARROW){
    balls[balls.length-1].shoot()
  }
}
