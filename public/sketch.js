let game;
let birdImg;
let pipeDownImg, pipeUpImg;
let back, bg

function preload() {
   birdImg = loadImage('resources/flappy.png')
   pipeDownImg = loadImage('resources/pipeDown.png')
   pipeUpImg = loadImage('resources/pipeUp.png')
   back = loadImage('resources/background.png')
}

function setup() {
   createCanvas(windowWidth, windowHeight)
   //load background
   bg = new Background(back, 5)
   //Game(bg, birdMass, birdX, birdY, pipeWidth, pipeGap, pipeSpeed, pipeCount)
   game = new Game(bg, 5, windowWidth/2 - 300, windowHeight/2, 240, 300, 10, 3)
   // bird = new Bird(5, windowWidth/2 - 300, 0)
   game.setup()
}

function draw() {
   background(0)
   bg.load()
   game.draw(bg, birdImg, pipeDownImg, pipeUpImg)
}

function keyPressed() {
   if (key === ' ' && frameCount >= 40) {
      game.control()
      // console.log(frameCount)
   }
}
