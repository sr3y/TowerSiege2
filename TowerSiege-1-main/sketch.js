const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var world, engine;
var ground, stand1, stand2, stricker1;
var block1, block2, block3, block4, block5;
var block2a, block3a, block4a;
var block3b;
var block8, block9, block10, block11, block12;
var block13, block14, block15, block16;
var slingshot1;



function setup(){
    createCanvas(1600, 600);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(800, 590, 1600, 20);

    stand1 = new Stand(750, 450, 200, 20);
    stand2 = new Stand(390, 250, 200, 20);
    stricker1 = new Stricker(50, 200, 40, 40);

    block1 = new Block(795, 420, 30, 30);
    block2 = new Block(780, 420, 30, 30);
    block3 = new Block(750, 420, 30, 30);
    block4 = new Block(720, 420, 30, 30);
    block5 = new Block(705, 420, 30, 30);

    block2a = new Block(780, 390, 30, 30);
    block3a = new Block(750, 390, 30, 30);
    block4a = new Block(720, 390, 30, 30);

    block3b = new Block(750, 360, 30, 30);

    //level 3??
    block8 = new Block(330, 235, 30, 30);
    block9 = new Block(360, 235, 30, 30);
    block10 = new Block(390, 235, 30, 30);
    block11 = new Block(420, 235, 30, 30);
    block12 = new Block(450, 235, 30, 30);

    //level 2
    block13 = new Block(360, 195, 30, 30);
    block14 = new Block(390, 195, 30, 30);
    block15 = new Block(420, 195, 30, 30);

    //level top
    block16 = new Block(390, 155, 30, 30);
    
    slingshot1 = new Slingshot(stricker1.body, {x:100, y:200})
    

    Engine.run(engine);
}

function draw(){
    rectMode(CENTER);
    background(2, 82, 69);

    ground.display();
    stand1.display();
    stand2.display();
    stricker1.display();

    fill(173, 225, 147)
    block1.display();
    block2.display();   
    block3.display();
    block4.display();
    block5.display();

    fill(255, 248, 121)
    block2a.display();
    block3a.display();
    block4a.display();

    fill(255, 122, 64)
    block3b.display();

    fill(173, 225, 147)
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill(255, 248, 121)
    block13.display();
    block14.display();
    block15.display();
    
    fill(255, 122, 64)
    block16.display();

    slingshot1.display()


}


function mouseDragged(){
    //resetting the position of the object whenever the mouse is moved 
    Matter.Body.setPosition(stricker1.body, {x: mouseX, y: mouseY})
}

function mouseReleased(){
    slingshot1.fly();
    Matter.Body.setPosition(stricker1.body, {x: 50, y: 200})
    /*if(keyDown(UP_ARROW)){
        Matter.Body.applyForce(stricker1.body, stricker1.body.position, {x:60, y:60})
    }*/

}

function keyPressed(){
    if(keyCode === 32){
        slingshot1.attach(stricker1.body)
    }
}
