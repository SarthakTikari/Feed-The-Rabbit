var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;
var score=0;
var score2=0

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  backmusic=loadSound("backmusic.mp3")
  eatSound=loadSound("bite.mp3")
  eatSound2=loadSound("bite2.mp3")
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

backmusic.loop()


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);



group=new Group()
group2=new Group()
}

function draw() {
  background(0);
 
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  for(var i=0;i<group.length;i++){
    var temp=group.get(i)
    if(rabbit.isTouching(apple)){
      temp.destroy();
      eatSound2.play()
      score++
    }
  
  }
  for(var a=0;a<group2.length;a++){
    var temp2=group2.get(a)
    if(rabbit.isTouching(temp2)){
      temp2.destroy();
      eatSound.play()
      score2++
    }
  
  
  }   
     
    
   
  
  
  

  var select_sprites = Math.round(random(1,3));
  if (frameCount % 80 === 0) {
    if (select_sprites == 2) {
      createApples();
    } else if (select_sprites == 1) {
      createOrange();
    }else {
      createRed();
    }
 }
   drawSprites();
   stroke("white")
   fill("white")
   textSize(15)
   
   text("Apples Eaten: "+score,20,20)
   text("Leaves Eaten: "+score2,280,20)
}



  
 





function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
group.add(apple)
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
group2.add(orangeL)
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
  group2.add(redL)
}
