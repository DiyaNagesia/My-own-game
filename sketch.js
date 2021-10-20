var shark;
var sharkR,sharkL,sharkU,sharkD;
var sea;
var gDot;

function preload(){
	sea = loadImage("seaImage.jpg")
	sharkR = loadImage("shark_Images/shark_right.png")
	sharkL = loadImage("shark_Images/shark_left.png")
	sharkU = loadImage("fishesImage/shark.png")
	sharkD = loadImage("shark_Images/shark_down.png")
	gDot = loadImage("fishesImage/dot.png")
}
function setup(){
	createCanvas(windowWidth,windowHeight)
	shark = createSprite(100,windowHeight-100,50,50)
	shark.addImage(sharkU)
	shark.scale = 0.3
	shark.debug = false
	shark.setCollider("rectangle",0,0,350,350)

	dotGroup = new Group()
}
function draw(){
	background(sea)

	if(keyDown(UP_ARROW)){
		shark.addImage(sharkU)
		shark.velocityX = 0
		shark.velocityY = -5
	}
	
	if(keyDown(DOWN_ARROW)){
		shark.addImage(sharkD)
		shark.velocityX = 0
		shark.velocityY = 5
	}
	
	if(keyDown(RIGHT_ARROW)){
		shark.addImage(sharkR)
		shark.velocityX = 5
		shark.velocityY = 0
	}
	if(keyDown(LEFT_ARROW)){
		shark.addImage(sharkL)
		shark.velocityX = -5
		shark.velocityY = 0
	}

	spawnDot()
for (var i = 0; i < dotGroup.length; i++) {
			if (dotGroup.get(i).isTouching(shark)) {
				dotGroup.get(i).destroy();
			

			}
			
		}
	drawSprites()
}

function spawnDot(){
	if(frameCount % 10 === 0){
		var dot = createSprite(windowWidth,Math.round(random(20,windowHeight-60)))
		 
	dot.addImage(gDot)
	dot.scale = 0.2
	dot.velocityX = -5

		dotGroup.add(dot)

		
	}
}
