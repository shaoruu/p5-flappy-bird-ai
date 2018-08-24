function Background(bg, speed) {
   this.bg = bg
   this.speed = speed
   this.x = 0

   this.load = function() {
      image(this.bg, this.x, 0, this.bg.width, windowHeight)
      this.x -= this.speed
      if (-this.x > this.bg.width - windowWidth )
         this.x = 0
   }

   this.reset = function() {
      this.x = 0
   }
}
