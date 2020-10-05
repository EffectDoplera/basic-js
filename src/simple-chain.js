const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length
  },
  addLink(value) {
    (value !== undefined) ? this.arr.push(`( ${value} )~~`) : this.arr.push(`( )`) 
    return this
  },
  removeLink(position) {
    if (position < 1) {
      this.arr = []
      throw Error('THROWN')
    }
    this.arr.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    if (!this.arr) return this
    this.arr.reverse()
    return this
  },
  finishChain() {
    const result = this.arr.join('').split('~~')
    result.pop()
    this.arr = []
    return result.join('~~')
  }
};

module.exports = chainMaker;
