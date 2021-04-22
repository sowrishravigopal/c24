const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var plane, rubber, iron, stone;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
rubber = new Rubber(900, 450, 70);
    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron = new Iron(300, 350);
    stone = new Stone(700, 320, 100,100);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);
rubber.display();
iron.display();

    plane.display();
    hammer.display();
    stone.display();

    
 
}