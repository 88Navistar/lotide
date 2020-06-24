const eqArrays = require('./eqArrays');

const middle = function(array) {
  let midArray = Math.floor((array.length / 2));
  //console.log(midArray);
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return [array[midArray]];
  } else {
    return ([array[midArray - 1], array[midArray]]);
  }
};
// middle([1, 2, 3, 4, 5]);
// middle([1, 2, 3, 4, 5, 6])
console.log(middle([1, 2]));
console.log(middle([1, 2, 3, 4, 5]));
console.log(middle([1, 2, 3, 4, 5, 6]));

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❗️Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

console.log(assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]));