function Background(bg, bg2, speed) {
   this.bg = bg
   this.bg2 = bg2
   this.speed = speed
   this.x1 = 0
   this.x2 = bg.width

   this.load = function() {
      image(this.bg, this.x1, 0, this.bg.width, windowHeight)
      image(this.bg2, this.x2, 0, this.bg2.width, windowHeight)
      this.x1 -= this.speed
      this.x2 -= this.speed
      if (-this.x1 >= this.bg.width - windowWidth) {
         this.x1 = 0
      }
      if (-this.x2 >= this.bg2.width - windowWidth) {
         this.x2 = bg.width
      }
   }

   this.reset = function() {
      this.x1 = 0
      this.x2 = bg.width
   }
}
