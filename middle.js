// FUNCTION IMPLEMENTATION
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

const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const middle = function(array) {
  const midArray = Math.floor((array.length / 2));
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 !== 0) {
    return array[midArray];
  } else {
    return ([array[midArray - 1], array[midArray]]);
  }
};

console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

// // TEST/ASSERTION FUNCTIONS
// const eqArrays = function(...) {
//   //...
// }

// const assertArraysEqual = function(actual, expected) {
//   //...
// }

// // ACTUAL FUNCTION
// const middle = function(array) {
//   //...
// }


// Part one and two, not needed for middle.js
// TEST CODE
// ...

// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => true
// assertArraysEqual([1, 2, 3], [3, 2, 1]); // => false

// assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => false

// TEST CODE for part 2
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// TEST CODE from assert Equals part 1
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 2);