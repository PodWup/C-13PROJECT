var garden,rabbit,apple;
var gardenImg,rabbitImg,appleImg,orangeImg,RedImg;

function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 

}

function setup(){
  
  createCanvas(400,400);

  

  
// mover o fundo
garden = createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage("rabbitImg",rabbitImg);

}

function draw() {
  background(0);
  edges = createEdgeSprites();

  

  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  //var apple,orange,red = Math.round(random(1,3));

  var select_Sprites = Math.round(random(1,3));
  

  if (frameCount % 80 == 0) {
    if (select_Sprites == 1) {
      createApples();
    } else if (select_Sprites == 2) {
      createOrange();
    } else if (select_Sprites == 3) {
      createRed();
    }
  }

  drawSprites();
  
}

function createApples(){
  apple = createSprite(random(50, 350),40 , 10, 10);
  apple.addImage(appleImg);
  apple.scale=0.07;
  apple.velocityY=3;
  apple.lifetime=150;

}

function createOrange(){
  orange = createSprite(random(50,350),40, 10, 10);
  orange.addImage(orangeImg);
  orange.scale=0.07;
  orange.velocityY=3;
  orange.lifetime=150;
}

function createRed(){
  red = createSprite(random(50,350),40, 10, 10);
  red.addImage(redImg);
  red.scale=0.07;
  red.velocityY=3;
  red.lifetime=150;
}

//var red,orange,apple = Math.round(random(1,6));