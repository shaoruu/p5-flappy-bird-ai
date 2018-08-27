function NeuralNetwork() {
   this.n_nodes = 6
   this.neurons = new Array(this.n_nodes)
   this.outputWeights = new Array(2)
   this.outputBias = new Array(2)
   this.isJump = false

   this.setup = function() {
      for (let i = 0; i < this.neurons.length; i++)
         this.neurons[i] = new Neuron()
      for (let i = 0; i < 2; i++)
         this.outputWeights[i] = new Array(this.n_nodes)
      for (let i = 0; i < 2; i++) {
         for (let j = 0; j < this.outputWeights[i].length; j++)
            this.outputWeights[i][j] = random(0, 10)
      }
      this.outputBias[0] = random(0, 100)
      this.outputBias[1] = random(0, 100)
   }

   this.feed = function(x, y) {
      let vals = new Array(this.n_nodes)
      for (let i = 0; i < this.neurons.length; i++)
         vals[i] = this.sigmoid(this.neurons[i].output(x, y))

      let sumJ = 0, sumNJ = 0
      for (let j = 0; j < this.n_nodes; j++) {
         sumJ += this.outputWeights[0][j] * vals[j]
         sumNJ += this.outputWeights[1][j]  * vals[j]
      }
      sumJ += this.outputBias[0]
      sumNJ += this.outputBias[1]

      sumJ = this.sigmoid(sumJ)
      sumNJ = this.sigmoid(sumNJ)
      if (sumJ >= sumNJ) this.isJump = true
      else this.isJump = false

      console.log([sumJ, sumNJ, this.isJump])
   }

   this.sigmoid = function(t) {
      return 1/(1+Math.pow(Math.E, -t));
   }
}
