var trex, trex_running, trex_collided ;

var ground , invisibleGround, groundImage;

var cloud , cloudImage;

function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudImage = loadImage("cloud.png")
}

function setup() {
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    
    //create an invisible ground
    invisibleGround = createSprite(200,190,400,10);
    invisibleGround.visible = false 

    //random number generation
    // let rand = Math.round(random(1,100))
    // console.log(rand)
    

}

function draw() {
    background("black");

    //console.log(trex.y)
    //jump when the space button is pressed
    if (keyDown("space") && trex.y>161) {
        trex.velocityY = -10;
    }

    //gravity
    trex.velocityY = trex.velocityY + 0.8

    //moving the bg
    if (ground.x < 0) {
        ground.x = ground.width / 2;
    }

    trex.collide(invisibleGround);

    spawnClouds()
    
    drawSprites();
}

function spawnClouds(){
    

    if(frameCount%80===0)
   {
    cloud = createSprite(600,150,30,70)
    cloud.y = Math.round(random(10,60))
    cloud.addImage(cloudImage)
    cloud.scale = 0.2
    cloud.velocityX = -3 
    
    console.log(trex.depth,cloud.depth)
    cloud.depth = trex.depth 
    trex.depth += 1
    // trex.depth++
    // trex.depth = trex.depth+1

    } 

}