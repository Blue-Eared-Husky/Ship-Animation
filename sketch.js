var seabackground, backgroundImg;
var ship, shipAnim;

function preload(){
  backgroundImg = loadImage("sea.png");
  shipAnim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  createCanvas(800,400);
  ship = createSprite(width/2,200,20,20);
  ship.addAnimation("ship",shipAnim);
  ship.scale = 0.3;

  seabackground = createSprite(width/2,200,width,20);
  seabackground.addImage(backgroundImg);
  seabackground.scale = 0.5;

  ship.depth = 10;
}

function draw() {
  background("blue");
  drawSprites();
}