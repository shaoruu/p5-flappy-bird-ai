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
      push()
         imageMode(CENTER)
         angleMode(RADIANS)
         translate(this.position.x, this.position.y)
         let angle = map(this.position.y, windowHeight, 0, .1 * Math.PI, -.3 * Math.PI)
         rotate(angle)
         image(img, 0, 0, this.mass*12, this.mass*12)
         // fill(255)
         // ellipse(0, 0, this.mass*12, this.mass*12)
      pop()
      // fill(255)
      // ellipse(this.position.x, this.position.y, 100, 100)
   }

   //check edges function (useless function)
   this.checkEdges = function(game) {
      if (this.position.y >= (windowHeight - this.mass*8 - 25)) {
         this.kill()
      }
   }

   //reset everything
   this.reset = function(pause) {
      if (!pause) {
         this.position = createVector(this.originalPosition.x, this.originalPosition.y)
         this.jump(-9.8 * 2)
      }
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

   //setScore
   this.setScore = function() {
      this.score = 0
   }
}
