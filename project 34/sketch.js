const Engine = Matter.Engine;
const World= Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var pendulum1;
var chain1;
var Mouse;
var mConstraint, canvas;

function preload(){
 
}

function setup(){   
    canvas = createCanvas(400,480);

    engine = Engine.create();
    world = engine.world;

    //var canvasmouse = Mouse.create(canvas);
    //canvasmouse.pixelRatio = pixelDensity();
    //var options = {
      //mouse: canvasmouse
    //};
    //mConstraint = MouseConstraint.create(engine, options);
    //World.add(world, mConstraint);


  pendulum1 = new Pendulum(100, 300, "indigo");
  pendulum2 = new Pendulum(140, 300, "violet");
  pendulum3 = new Pendulum(180, 300, "blue");
  pendulum4 = new Pendulum(220, 300, "green");
  pendulum5 = new Pendulum(260, 300, "yellow");
  pendulum6 = new Pendulum(300, 300, "red");

  chain1 = new Sling(pendulum1.body, {x: 100, y:100});
  chain2 = new Sling(pendulum2.body, {x: 140, y:100});
  chain3 = new Sling(pendulum3.body, {x: 180, y:100});
  chain4 = new Sling(pendulum4.body, {x: 220, y:100});
  chain5 = new Sling(pendulum5.body, {x: 260, y:100});
  chain6 = new Sling(pendulum6.body, {x: 300, y:100});
}

function draw(){
    background("black");
    Engine.update(engine);
    
    pendulum1.display();
    pendulum2.display();
    pendulum3.display();
    pendulum4.display();
    pendulum5.display();
    pendulum6.display();

    chain1.display();
    chain2.display();
    chain3.display();
    chain4.display();
    chain5.display();
    chain6.display();
   
   
}

function mouseDragged(){
  Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}

