const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    b1=new Building(700,100,100,100)
    b2=new Building(700,100,100,100)
    b3=new Building(800,100,100,100)
    b4=new Building(800,100,100,100)
    b5=new Building(700,100,100,100)
    b6=new Building(800,100,100,100)
    ball=new Ball(200,200,30,40)
    rope=new Rope(ball.body,{x:500,y:100})
}

function draw(){
    background("blue")
    
  
    Engine.update(engine);
  
    b1.display();
    b2.display();
    b3.display();
    b4.display();
    b5.display();
    b6.display();
    ground.display();
    ball.display();
    rope.display();

    

}
function mouseDragged(){
Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})

}