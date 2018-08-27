function Neuron() {
   this.xw = random(0, 10)
   this.yw = random(0, 10)
   this.bias = random(0, 10)

   this.output = function(x, y) {
      return this.xw * x + this.yw * y + this.bias
   }
}
