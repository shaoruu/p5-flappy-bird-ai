function Game(bg, birdMass, birdX, birdY, pipeWidth, pipeGap, pipeSpeed, pipeCount) {
   this.bird = new Bird(birdMass, birdX, birdY)
   this.pipeInterval = (windowWidth) / (pipeCount - 1) - pipeWidth
   this.pipeCount = pipeCount
   this.pipes = new Array(this.pipeCount)
   this.bg = bg
   this.run = true

   // console.log(this.pipeCount)
   this.setup = function() {
      console.log([pipeWidth, this.pipeInterval, this.pipeCount, windowWidth, this.pipes])
      for (let i = 0; i < this.pipeCount; i++) {
         //pipe(x, w, gap, speed, interval)
         this.pipes[i] = new Pipe(windowWidth - 100 + (this.pipeInterval + pipeWidth) * i, pipeWidth, pipeGap, pipeSpeed, this.pipeInterval)
         this.pipes[i].setup()
      }
      this.control(-9.8 * 2)
      // console.log(windowWidth)
   }

   this.draw = function(bg, birdImg, pipeDownImg, pipeUpImg) {
      for (let i = 0; i < this.pipeCount; i++) {
         this.pipes[i].draw(this.bird, pipeDownImg, pipeUpImg)
         this.pipes[i].hit(this.bird)
      }
      this.bird.update(9.8 * 0.3)
      this.bird.draw(birdImg)
      this.bird.checkEdges()

      if (this.bird.killed) {
         this.reset()
         this.run = false
      }

      textSize(32)
      fill(0, 102, 153)
      text(this.bird.grade, 10, 60)
   }

   this.control = function(val) {
      this.bird.jump(val)
   }

   //reset everything
   this.reset = function(bg) {
      this.bg.reset()
      this.bird.reset()
      for (let i = 0; i < this.pipeCount; i++) {
         this.pipes[i].reset()
         this.control()
      }
      this.bird.revive()
   }
}
