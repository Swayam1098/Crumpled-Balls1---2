var box1, box2, box3
var ground;
var paper
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


function setup() {
	createCanvas(1500, 700);

	box1 = createSprite(1200,655,200,15);
	box1.shapeColor = ("red");
	box2 = createSprite(1090,575,20,180);
	box2.shapeColor = ("red");
	box3 = createSprite(1300,575,20,180);
	box3.shapeColor = ("red");
	
	
	ground = createSprite(740,667,1520,10)
    ground.shapeColor = ("yellow")

	engine = Engine.create();
	world = engine.world;

	
	paper1 = new Paper()


	//Create the Bodies Here.

	//paper = new Paper(100,640,50,50);

	Engine.run(engine);
  
}


function draw() {
  background(0);
  
paper1.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyFroce(paperObject.body,paperObject.body.position,{x:1230,y:70})
	}
}



