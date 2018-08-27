function Pipes(pipeCount, pipeWidth, pipeGap, pipeSpeed, pipeStart) {
   this.pipeCount = pipeCount
   this.pipeWidth = pipeWidth
   this.pipeGap = pipeGap
   this.pipeSpeed = pipeSpeed
   this.pipeInterval = (windowWidth) / (pipeCount - 1) - pipeWidth
   this.pipeStart = pipeStart
   this.pipes = new Array(this.pipeCount)
   this.nextLocation = [0, 0]

   this.setup = function() {
      for (let i = 0; i < this.pipeCount; i++) {
         //remember pipeStart
         this.pipes[i] = new Pipe(windowWidth - pipeStart + (this.pipeInterval + pipeWidth) * i, pipeWidth, pipeGap, pipeSpeed, this.pipeInterval)
         this.pipes[i].setup()
      }
   }

   this.draw = function(bird, pipeDownImg, pipeUpImg) {
      let nextIndex = this.getClosest(bird)
      this.nextLocation = [this.pipes[nextIndex].x + this.pipeWidth / 2, this.pipes[nextIndex].y1 + this.pipeGap/2]
      for (let i = 0; i < this.pipeCount; i++) {
         let isNext = false
         if (this.nextIndex === this.getClosest(bird)) isNext = true
         this.pipes[i].draw(bird, pipeDownImg, pipeUpImg, isNext)
         this.pipes[i].hit(bird)
      }
   }

   this.reset = function() {
      for (let i = 0; i < this.pipeCount; i++)
         this.pipes[i].reset()
   }

   //get closest pipe
   this.getClosest = function(bird) {
      for (let i = bird.position.x; i <= windowWidth; i++)
         for (let j = 0; j < this.pipeCount; j++)
            if (this.pipes[j].x + this.pipeWidth / 2 === i)
               return j
      return "no pipes found"
   }
}
