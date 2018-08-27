function Pipe(x, w, gap, speed, interval) {
   this.x = x
   this.w = w
   this.ogX = x
   this.ogW = w
   this.y1 = 0
   this.y2 = 0
   this.gap = gap
   this.speed = speed
   this.interval = interval
   this.pointAdded = false

   this.setup = function() {
      // this.y1 = random(100, 300)
      this.y1 = random(130, windowHeight - this.gap - 130)
      this.y2 = this.y1 + this.gap
      // console.log({'y1': this.y1, 'y2': this.y2})
      // console.log(this.x)
   }

   this.draw = function(bird, pipeDownImg, pipeUpImg, isNext) {
      let upY = this.y1 - pipeDownImg.height
      image(pipeDownImg, this.x, upY, this.w, pipeDownImg.height)
      image(pipeUpImg, this.x, this.y1 + this.gap, this.w, pipeUpImg.height)
      push()
         stroke(0)
         if (isNext) fill(0, 255, 0)
         else fill(234, 252, 40)
         ellipse(this.x + this.w / 2, this.y1 + this.gap/2, 8, 8)
      pop()
      this.x -= this.speed

      //loop through
      if (this.x <= -this.w) {
         this.x = windowWidth + this.interval
         this.pointAdded = false
         this.setup()
      }
   }

   this.hit = function(bird) {
      //detect y1 and y2
      if (bird.position.y - bird.mass*5.3/2 < this.y1 || bird.position.y + bird.mass*5.3/2 > this.y2) {
         // console.log({'y1': this.y1, 'y2': this.y2})
         if ((bird.position.x + bird.mass*5.3/2) > this.x && (bird.position.x - bird.mass*5.3/2) < (this.x+this.w)) {
            bird.kill()
            // console.log({'bx': bird.position.x, 'x': this.x, 'bird.mass*6': bird.mass*6, 'this.w': this.w})
         }
      }
      else if ((bird.position.x + bird.mass*5.3/2) > this.x + this.w/3*2 && (bird.position.x - bird.mass*5.3/2) < (this.x+this.w)) {
         if (!this.pointAdded) {
            bird.earnPoint()
            this.pointAdded = true
         }
      }
   }

   this.reset = function() {
      this.x = this.ogX
      this.w = this.ogW
      this.pointAdded = false
   }
}
