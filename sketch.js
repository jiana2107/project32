const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;
const Body   = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var gameState="onSling"
var bg;
var score=0;

var ground1,ground2,groundB;
var polygon1;
var slingshot;
var b1,b2,b3,b4,b5,b6,b7,b8;
var b9,b10,b11,b12,b13,b14,b15,b16;
var b17,b18,b19,b20,b21,b22,b23,b24,b25;

function preload() {
 // getBackgroundImg();
  bg=loadImage("bg1.png")
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground1=new Ground(290,300,300,10);
  ground2=new Ground(555,220,200,10);
  groundB=new Ground(400,360,800,10);

  //polygon1=Matter.Bodies.polygon(50,200,5,20)
  //World.add(world,polygon1);

  polygon1=new Polygon(200,300,50,50)

  slingshot=new Sling(polygon1.body,{x:50,y:130})

  b1=new Block(200,275,30,40);
  b2=new Block(230,275,30,40);
  b3=new Block(260,275,30,40);
  b4=new Block(290,275,30,40);
  b5=new Block(320,275,30,40);
  b6=new Block(350,275,30,40);
  b7=new Block(380,275,30,40);
  b8=new Block(230,235,30,40);
  b9=new Block(260,235,30,40);

  b10=new Block(290,235,30,40);
  b11=new Block(320,235,30,40);
  b12=new Block(350,235,30,40);
  b13=new Block(260,195,30,40);
  b14=new Block(290,195,30,40);
  b15=new Block(320,195,30,40);
  b16=new Block(290,155,30,40);

  b17=new Block(500,195,30,40);
  b18=new Block(530,195,30,40);
  b19=new Block(560,195,30,40);
  b20=new Block(590,195,30,40);
  b21=new Block(620,195,30,40);
  b22=new Block(530,155,30,40);
  b23=new Block(560,155,30,40);
  b24=new Block(590,155,30,40);
  b25=new Block(560,115,30,40);
 
  //createSprite(400, 200, 50, 50);
  console.warn("worldTimeAPI")
}

function draw() {
  Engine.update(engine)
  background(bg); 
  
  //text("score: " + score,400,20)
  fill("black")
  text("score:"+ score, 700,30)

  ground1.display();
  ground2.display();
  groundB.display();
  polygon1.display();
  slingshot.display()
  
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();

  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();

  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();

  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();

  //drawSprites();
}

function mouseDragged(){
  if(gameState=="onSling"){
  Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}}

function mouseReleased(){
  slingshot.fly();
  gameState="launched"
}

function keyPressed(){
  if(keyCode==32){
    slingshot.attach(polygon1.body)
    gameState="onSling"
  }
}

async function getBackgroundImg(){
  var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
  var responseJSON = await response.json();

  var datetime=responseJSON.datetime;
  var hour=datetime.slice(11,13)
  //console.log(hour)

  if (hour>=0600 && hour<=1900){
    bg="bg1.png"
  }
  else{
    bg="bg2.jpg"
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
  
}