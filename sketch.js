
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var stand;
var rope1,rope2,rope3,rope4;
var bg_img;

function preload()
{
	bg_img = loadImage("bg.jpg");
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	bob1 =new Bob(300,350,25);
	bob2 =new Bob(340,350,25);
	bob3 =new Bob(380,350,25);
	bob4 =new Bob(420,350,25);
	bob5 =new Bob(500,350,25);

	stand = new roof(400,100,300,20);

	rope1 = new rope(bob1.body,stand.body,-120,10);
	rope2 = new rope(bob2.body,stand.body,-80,10);
	rope3 = new rope(bob3.body,stand.body,-30,10);
	rope4 = new rope(bob4.body,stand.body,20,10);
	rope5 = new rope(bob5.body,stand.body,70,10);


	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg_img);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  stand.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-300,y:300});
	}
}



