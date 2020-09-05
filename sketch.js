var ball1;
var bin1, ground;
var canPiece1
var gameState;
var PLAY = 1;
var END = 0;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 =  new PaperClass(200,450,50); 

	ground = new Ground(400,height,800,20);
	

	canPiece1 = new can(675,680,350,20);
	canPiece2 = new can(500,640,20,100);
	canPiece3 = new can(800,640,20,100);
	
	Engine.run(engine);
	gameState = PLAY;
}
function throwBall() {
	if(keyCode === UP_ARROW && gameState === PLAY) {
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:37,y:-37});
	}
}
function winOrLose() {
if(ball1.body.position.x > 500 & ball1.body.position.x <800 & ball1.body.position.y > 600)
{
	background("green");
	stroke("white");
	text("You Win!", 400,350);
	gameState = END;
}
else if(ball1.body.position.x > 800)
{
	background("red");
	stroke("white");
	text("You Lose!", 400,350);
	gameState = END;
}

}
function draw() {
  rectMode(CENTER);
  background(0);
	
	ball1.display();
	ground.display();
	canPiece1.display();
	canPiece2.display();
	canPiece3.display();

	winOrLose();

	throwBall();

  drawSprites();
 
}



