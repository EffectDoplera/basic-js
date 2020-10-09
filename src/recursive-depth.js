const CustomError = require("../extensions/custom-error");

// module.exports = 
class DepthCalculator {
  constructor() {
    this.depth = 0;
    this.max = 0;
  }
  calculateDepth(arr) {
    this.depth += 1

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i])
      }
    }

    if (this.depth > this.max) {
      this.max = this.depth
    }
    this.depth -= 1
    
    if (this.depth === 0) {
      return this.max
    }
  }
};

const calc = new DepthCalculator().calculateDepth([1, 2, 3, 4, 5, [1, []]])
console.log(calc);