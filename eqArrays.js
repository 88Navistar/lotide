const assertEqual = require('./assertEqual')

const eqArrays = function(xArray, yArray) {
  if (xArray.length !== yArray.length) {
    return false;
  }
  for (let i = 0; i < xArray.length; i++) {
    if (xArray[i] !== yArray[i]) {
      return false;
    }
  }
  return true;
};

 module.exports = eqArrays;