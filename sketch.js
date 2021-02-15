const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var log
var gameState = "onSling";

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);
     
    Zombie=new Pig(800,335,100,100)
    Zombie1=new Pig(690,335,100,100)
    Zombie2=new Pig(910,335,100,100)
    Zombie3=new Pig(1020,335,100,100)
    Zombie4=new Pig(800,235,100,100)
    Zombie5=new Pig(910,235,100,100)
    Zombie6=new Pig(860,135,100,100)
    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //strokeWeight(4);
     Zombie6.display() 
     Zombie1.display()
     Zombie2.display()
     Zombie4.display() 
     Zombie3.display()
     Zombie5.display()
     Zombie.display()
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
     slingshot.attach(bird.body);
     gameState="onSling"
    }
}