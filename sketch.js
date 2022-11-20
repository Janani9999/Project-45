var bg,bgImg
var spaceship,spaceshipImg
var obstacleImg


function preload(){
  bgImg=loadImage("space.png")
  spaceshipImg=loadImage("spaceship.png")
  obstacleImg=loadImage("asteroid.png")
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  

  bg=createSprite(width/2, height/2, width, height);
  bg.addImage(bgImg)
  bg.scale=1.5

  spaceship=createSprite(400,400,30,50);
  spaceship.addImage(spaceshipImg)
  spaceship.scale=0.3
}

function draw() {
  bg.velocityX = -2
  if (bg.x < 0) {
    bg.x = width/2
  }  

  if(keyDown(RIGHT_ARROW)){
    spaceship.x=spaceship.x+2
  }

  if(keyDown(UP_ARROW)){
    spaceship.y=spaceship.y-2
  }

  if(keyDown(DOWN_ARROW)){
    spaceship.y=spaceship.y+2
  }

  spawnObstacles()

  drawSprites();
}

function spawnObstacles() {
  if (frameCount % 100 == 0) {
    var obstacle = createSprite(850,random(height/2-50,height/2+80),20,50)
    obstacle.velocityX=-2
    obstacle.addImage(obstacleImg)
    obstacle.scale=0.2
    
    
  }
}


