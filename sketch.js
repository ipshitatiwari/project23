var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rectangle1,rectangle2,rectangle3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	rectangle1= Bodies.rectangle(260,610,20,100,{isStatic:true})
	World.add(world,rectangle1)
	rectangle2= Bodies.rectangle(460,610,20,100,{isStatic:true})
	World.add(world,rectangle2)
	rectangle3=Bodies.rectangle(360,650,200,20,{isStatic:true})
	World.add(world,rectangle3)

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 rect(rectangle1.position.x,rectangle1.position.y,20,100)
 rect(rectangle2.position.x,rectangle2.position.y,20,100)
 rect(rectangle3.position.x,rectangle3.position.y,200,20)
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



