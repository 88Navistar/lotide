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
    newArray = source.filter(function(numbers) {
      return numbers !== item;
    });
  });
  return newArray;

};

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

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