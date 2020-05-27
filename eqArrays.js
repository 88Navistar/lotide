// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

// TEST CODE for part 2
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

// TEST CODE from assert Equals part 1
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 2);