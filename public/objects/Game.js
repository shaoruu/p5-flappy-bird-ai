function Game(bg, birdMass, birdX, birdY, pipeWidth, pipeGap, pipeSpeed, pipeCount, pipeStart, pause) {
   this.bird = new Bird(birdMass, birdX, birdY)
   this.pipes = new Pipes(pipeCount, pipeWidth, pipeGap, pipeSpeed, pipeStart)
   this.bg = bg
   this.run = true
   this.pause = pause
   this.neuralNetwork = new NeuralNetwork()

   // console.log(this.pipeCount)
   this.setup = function() {
      this.pipes.setup()
      this.control(-9.8 * 2)
      this.neuralNetwork.setup()
      // console.log(this.bird)
      // console.log(windowWidth)
   }

   this.draw = function(bg, birdImg, pipeDownImg, pipeUpImg, font) {
      this.pipes.draw(this.bird, pipeDownImg, pipeUpImg)

      push()
         fill(255, 0, 0)
         stroke(0)
         line(this.bird.position.x, this.bird.position.y, this.pipes.nextLocation[0], this.pipes.nextLocation[1])
      pop()

      this.neuralNetwork.feed(this.pipes.nextLocation[0], this.pipes.nextLocation[1])

      if (this.bird.killed) {
         if (this.pause)
            this.run = false
         else
            this.reset(this.bg)
      }

      this.bird.update(9.8 * 0.3)
      this.bird.draw(birdImg)
      this.bird.checkEdges()

      push()
         rectMode(CENTER)
         textFont(font)
         textSize(100)
         fill(255)
         text(this.bird.score, windowWidth/2, 100)
      pop()

      if (this.neuralNetwork.isJump) this.control(-9.8 * 2)
   }

   this.control = function(val) {
      this.bird.jump(val)
   }

   //reset everything
   this.reset = function(bg) {
      this.bg.reset()
      this.run = true
      this.pipes.reset()
      this.bird.reset()
      this.bird.revive()
   }

   //on off pause
   this.triggerMode = function() {
      this.pause = !this.pause
   }
}
