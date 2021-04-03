const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(400,150,350,200);
  rope = new Rope(hero.body, { x: 450, y: 200 });
  monster = new Monster(1100,550,300);

  box1 = new Box(850, 400, 70, 70);
  box2 = new Box(920, 400, 70, 70);
  box3 = new Box(780, 400, 70, 70);
  box4 = new Box(700, 400, 70, 70);
  box5 = new Box(815, 330, 70, 70);
  box6 = new Box(885, 330, 70, 70);
  box7 = new Box(745, 330, 70, 70);
  box8 = new Box(850, 260, 70, 70);
  box9 = new Box(780, 260, 70, 70);
  box10 = new Box(815, 190, 70, 70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();

  hero.display();
  rope.display();
  monster.display();

}

function mouseDragged(){
      Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  rope.fly();
}

function keyPressed(){
  if(keyCode === 32 && hero.body.speed< 1){
     rope.attach(hero.body);
     Matter.Body.setPosition(hero.body,{x:450,y:200});

  }
}

