let game;
let birdImg;
let pipeDownImg, pipeUpImg;
let back, back2, bg
let font

function preload() {
   birdImg = loadImage('resources/flappy.png')
   pipeDownImg = loadImage('resources/pipeDown.png')
   pipeUpImg = loadImage('resources/pipeUp.png')
   back = loadImage('resources/background.png')
   back2 = loadImage('resources/background2.png')
   font = loadFont('resources/FlappyBird.ttf')
}

function setup() {
   createCanvas(windowWidth, windowHeight)
   //load background
   bg = new Background(back, back2, 5)
   //Game(bg, birdMass, birdX, birdY, pipeWidth, pipeGap, pipeSpeed, pipeCount, pipeStart, pause)
   game = new Game(bg, 5, windowWidth/2 - 300, windowHeight/2, 200, 250, 10, 3, 100, true)
   // bird = new Bird(5, windowWidth/2 - 300, 0)
   game.setup()
}

function draw() {
   if (game.run) {
      background(0)
      bg.load()
      game.draw(bg, birdImg, pipeDownImg, pipeUpImg, font)
   }
}

function keyPressed() {
   if (key === ' ')
      game.control(-9.8 * 5)
}

function mousePressed() {
   game.reset()
}
