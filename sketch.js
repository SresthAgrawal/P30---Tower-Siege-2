const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

//set 1
// level 1
var block1, block2, block3, block4, block5, block6, block7;
//level 2
var block8, block9, block10, block11, block12;
//level 3
var block13, block14, block15;
//level 4
var block16;

//set 2
//level 1
var blockB1, blockB2, blockB3, blockB4, blockB5;
//level 2
var blockB6, blockB7, blockB8;
//level 3
var blockB9;

function setup() {
    createCanvas(1300, 600);
	engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    //ground and stands
    ground = new Ground();
    stand1 = new Stand(390,300,250,10);
    stand2 = new Stand(700,200,200,10);

    //set 1
    //level 1
    block1 = new Block(390,275,30,40);
    block2 = new Block(330,275,30,40);
    block3 = new Block(360,275,30,40);
    block4 = new Block(390,275,30,40);
    block5 = new Block(420,275,30,40);
    block6 = new Block(450,275,30,40);
    block7 = new Block(480,275,30,40);
    
    //level 2
    block8 = new Block(330,235,30,40);
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40);
    block11 = new Block(420,235,30,40);
    block12 = new Block(450,235,30,40);
    
    //level 3
    block13 = new Block(360,195,30,40);
    block14 = new Block(390,195,30,40);
    block15 = new Block(420,195,30,40);
    
    //level 4
    block16 = new Block(390,155,30,40);

    //set 2
    //level 1
    blocksB1 = new Block(640,175,30,40);
    blocksB2 = new Block(670,175,30,40);
    blocksB3 = new Block(700,175,30,40);
    blocksB4 = new Block(730,175,30,40);
    blocksB5 = new Block(760,175,30,40);

    //level 2
    blocksB6 = new Block(670,135,30,40);
    blocksB7 = new Block(700,135,30,40);
    blocksB8 = new Block(730,135,30,40);

    //level 3
    blocksB9 = new Block(700,95,30,40);
    
    //polygon
    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    //slingshot
    slingshot = new Slingshot(this.polygon,{x:100,y:200});
}

function draw() {
    if(backgroundImg)
    background(backgroundImg);

    text(mouseX + ',' + mouseY,10,15);
    textSize(20);
    fill("lightyellow");
    text("Drag the Polygon to Destroy the Blocks!",300,30);
    text("SCORE : " + score,750,40);
    textSize(10);
    text("Press Space to get a Second Chance to Play!!!",650 ,350);

    ground.display();
    stand1.display();
    stand2.display();
    strokeWeight(2);
    stroke(15);
    fill("skyblue");

    //set 1
    //level 1
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    fill("pink");

    //level 2
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    fill("turquoise");

    //level 3
    block13.display();
    block14.display();
    block15.display();
    fill("grey");

    //level 4
    block16.display();
    fill("skyblue");

    //set 2
    //level 1
    blockB1.display();
    blockB2.display();
    blockB3.display();
    blockB4.display();
    blockB5.display();
    fill("turquoise");

    //level 2
    blockB6.display();
    blockB7.display();
    blockB8.display();
    fill("pink");

    //level 3
    blockB9.display();
    fill("gold"); 

    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40);

    //slingshot
    slingshot.display();
}

function mouseDragged() {
    Matter.Body.setPosition(polygon.body,{x: mouseX,y: mouseY});
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32) {
        slingShot.attach(this.polygon);
    }
}