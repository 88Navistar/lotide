// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅Assertion Passed: ${arrayA} === ${arrayB}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arrayA} !== ${arrayB}`);
  }
};

const eqArrays = function(xArray, yArray) {
  if (xArray.length !== yArray.length) {
    return false
  }
  for (let i = 0; i < xArray.length; i++) {
    if (xArray[i] !== yArray[i]) {
      return false;
    }
  }
  return true;
};

const without = (source, itemToRemove) => {
  let newArray;
  itemToRemove.forEach(item => {
    newArray = source.filter(function(el) {
      return el !== item;
    });
  });
  return newArray;

};

without([1, 2, 3], [1]) // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

