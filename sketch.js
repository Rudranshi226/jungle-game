var jungleMan;
var gunMan;
var fruit,coins;
var pplants; 
var pGroup, gGroup, fGroup;
var score;
var gameState=0;
var button;

function preload(){

}

function setup() {
  createCanvas(400,600);
  jungleMan= createSprite(200,500,20,20);
  pGroup= createGroup();
  gGroup= createGroup();
  fGroup= createGroup();
  score= 0;
  button = createButton("PLAY");
    button.size(90,40);
    button.position(200,400);
    console.log("test2");
    
    console.log("test3");
}

function draw() 
{
  if(gameState===0){
    background("white");
    text("about the game",200,300);
    button.mousePressed(click);
}
  else if(gameState===1){

  
  background("green");
  obstacles();
  fruits();
  if(keyDown("right") && jungleMan.x<350){ 
    jungleMan.x= jungleMan.x+10;
  }
  if(keyDown("left") &&  jungleMan.x>50){
    jungleMan.x= jungleMan.x-10;
  
  }
  if(keyDown("down") && jungleMan.y<500){
    jungleMan.y= jungleMan.y+10;
  }
  if(keyDown("up") && jungleMan.y>100){
    jungleMan.y= jungleMan.y-10;
  }
  if(jungleMan.isTouching(fGroup)){
     score= score+1;
     fGroup.destroyEach();
  }
  if(jungleMan.isTouching(gGroup)){
    text("jungleMan is dead",200,300)
  }
  if(jungleMan.isTouching(pGroup)){
    score= score-1;
    pGroup.destroyEach();
  }
  text("score "+score,300,50);
 
  drawSprites();
}
  
}
function click(){
  console.log("test");
  gameState=1;
  
}
function obstacles(){
  if(frameCount%200===0){
 pplants= createSprite(350,-40,20,20);
 pplants.x= Math.round(random(50,350));
 pplants.velocityY = 4.0;
 pplants.shapeColor="black"
 pGroup.add(pplants);
 pplants.lifetime=170;
  }
}

function gunM(){
  if(frameCount%100===0){
    gunMan= createSprite(-5,350,20,20);
    gunMan.y = Math.round(random(200,500));
    gunMan.velocityX = 4.0;
    gunMan.shapeColor = "red";
    gGroup.add(gunMan);
    gunMan.lifetime=120;
  }
  if(frameCount%100===0){
    gunMan= createSprite(470,350,20,20);
    gunMan.y = Math.round(random(200,600));
    gunMan.velocityX = -3.0;
    gunMan.shapeColor = "red";
    gGroup.add(gunMan);
    gunMan.lifetime=150;
  }
}
function fruits(){
  if(frameCount%200===0 ){
    fruit= createSprite(50,50,20,20);
    fruit.x = Math.round(random(50,350));
    fruit.y = Math.round(random(70,500));
    fruit.shapeColor = "blue";
    fruit.lifetime=200;
    fGroup.add(fruit);
  }

}

