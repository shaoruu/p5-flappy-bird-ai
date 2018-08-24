function Bird(mass, x, y) {
   //constructors
   this.position = createVector(x, y)
   this.originalPosition = createVector(x, y)
   this.mass = mass
   this.velocity = 0
   this.acceleration = 0
   this.killed = false
   this.score = 0

   //update functions
   this.update = function(force) {
      this.applyForce(force)
      this.velocity += this.acceleration
      this.position.y += this.velocity
      this.acceleration = 0
   }
   this.applyForce = function(force) {
      let a = force / this.mass
      this.acceleration += a
      // console.log(this.position.y)
   }
   this.jump = function(force) {
      this.velocity = 0
      this.update(force)
   }

   //set functions
   this.setPosition = function(x, y) {
      this.position = createVector(x, y)
   }

   //draw function
   this.draw = function(img) {
      // fill (0)
      // ellipse (this.position.x, this.position.y, this.mass*16, this.mass*16)
      image(img, this.position.x - this.mass*8 - 10, this.position.y - this.mass*8 - 12, this.mass*24, this.mass*24)
   }

   //check edges function (useless function)
   this.checkEdges = function(game) {
      if (this.position.y > (windowHeight - this.mass*8)) {
         this.killed = true
      }
   }

   //reset everything
   this.reset = function() {
      this.position.x = this.originalPosition.x
      this.position.y = this.originalPosition.y
      this.velocity = 0
      this.acceleration = 0
   }

   //kill and revive functions
   this.kill = function() { this.killed = true }
   this.revive = function() { this.killed = false }

   //scoring
   this.earnPoint = function() {
      this.score++
   }
}
