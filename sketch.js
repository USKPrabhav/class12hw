var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImage
var orange,orangeLeaves
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImage = loadImage("apple.png");
  orangeLeaves = loadImage("orangeLeaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select_sprites = Math.round(random(1,2));
  
  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApples();
    } else {
      createOranges();
    }
  }
  drawSprites();
}
function createApples(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImage)
apple.scale=0.05
apple.velocityY=2


}
function createOranges(){
  orange = createSprite(random(50,350),40,10,10);
  orange.addImage(orangeLeaves)
orange.scale=0.05
orange.velocityY=2


}