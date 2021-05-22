
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stick1 = new Stick(380, 100, 500, 20);
	bob1 = new Bob(100, 300, 20, 20);
	bob2 = new Bob(300, 300, 20, 20);
	bob3 = new Bob(500, 300, 20, 20);
	bob4 = new Bob(700, 300, 20, 20);
	bob5 = new Bob(900, 300, 20, 20);

	var options = {
		bodyA: stick1.body,
		bodyB: bob1.body,
		stiffness: 0.08,
		length: 200,
		

	}
	var chain = constraint.create(options);
	World.add(world, chain);
	line(stick1.body.position.x, stick1.body.position.y, bob1.body.position.x, bob1.body.position.y);

	var options = {
		bodyA: stick1.body,
		bodyB: bob2.body,
		stiffness: 0.04,
		length: 200,

	}
	var chain = constraint.create(options);
	World.add(world, chain);
	line(stick1.body.position.x, stick1.body.position.y, bob2.body.position.x, bob2.body.position.y);

	var options = {
		bodyA: stick1.body,
		bodyB: bob3.body,
		stiffness: 0.04,
		length: 200,

	}
	var chain = constraint.create(options);
	World.add(world, chain);
	line(stick1.body.position.x, stick1.body.position.y, bob3.body.position.x, bob3.body.position.y);

	var options = {
		bodyA: stick1.body,
		bodyB: bob4.body,
		stiffness: 0.04,
		length: 200,

	}
	var chain = constraint.create(options);
	World.add(world, chain);
	line(stick1.body.position.x, stick1.body.position.y, bob4.body.position.x, bob4.body.position.y);

	var options = {
		bodyA: stick1.body,
		bodyB: bob5.body,
		stiffness: 0.04,
		length: 200,
		

	}
	var chain = constraint.create(options);
	World.add(world, chain);
	line(stick1.body.position.x, stick1.body.position.y, bob5.body.position.x, bob5.body.position.y);
	
	

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background("pink");





	stick1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	drawSprites();

}



