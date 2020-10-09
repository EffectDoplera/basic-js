const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error('Argument is not Array')

  const res = [...arr].filter((item) => !isNaN(parseInt(item)))

  for (let i = 0; i <= arr.length; i++) {
    if (res[i] === '--double-next') {
      res[i] = undefined
      res[i + 1] *= 2
    }
    
    if (res[i] === '--double-prev') {
      res[i] = undefined
      res[i - 1] *= 2
    }
  
    if (res[i] === '--discard-next') {
      res[i] = undefined
      res[i + 1] = undefined
    }
  
    if (res[i] === '--discard-prev') {
      res[i] = undefined
      res[i - 1] = undefined
    }
  }

  return res.filter((item) => item !== undefined)
};
