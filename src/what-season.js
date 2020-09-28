const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!Object.prototype.toString.call(date).match(['object Date'])) throw new Error('THROWN')
  
  const seasons = 
  [
    'winter', 
    'spring', 
    'summer', 
    'autumn'
  ]

  const month = date.getMonth()

  if (month <= 1 || month === 11) {
    return seasons[0]
  }

  if (month > 1 && month <= 4) {
    return seasons[1]
  }

  if (month > 4 && month <= 7) {
    return seasons[2]
  }

  return seasons[3]

};
