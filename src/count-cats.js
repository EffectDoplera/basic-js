const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0
  matrix
  .flat()
  .forEach(item => {
    if (item === '^^') {
      result++
    }
  })
  return result
};
