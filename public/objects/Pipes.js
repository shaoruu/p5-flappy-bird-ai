function Pipes(pipeCount, pipeWidth, pipeGap, pipeSpeed, pipeStart) {
   this.pipeCount = pipeCount
   this.pipeWidth = pipeWidth
   this.pipeGap = pipeGap
   this.pipeSpeed = pipeSpeed
   this.pipeInterval = (windowWidth) / (pipeCount - 1) - pipeWidth
   this.pipeStart = pipeStart
   this.pipes = new Array(this.pipeCount)

   this.setup = function() {
      for (let i = 0; i < this.pipeCount; i++) {
         //remember pipeStart
         this.pipes[i] = new Pipe(windowWidth - pipeStart + (this.pipeInterval + pipeWidth) * i, pipeWidth, pipeGap, pipeSpeed, this.pipeInterval)
         this.pipes[i].setup()
      }
   }

   this.draw = function(bird, pipeDownImg, pipeUpImg) {
      for (let i = 0; i < this.pipeCount; i++) {
         this.pipes[i].draw(bird, pipeDownImg, pipeUpImg)
         this.pipes[i].hit(bird)
      }
   }

   this.reset = function() {
      for (let i = 0; i < this.pipeCount; i++)
         this.pipes[i].reset()
   }
}
