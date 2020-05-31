// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❗️Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
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

const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let result = false;
  if (Object.keys(object1).length === Object.keys(object2).length) {
    keys1.forEach(element => {
      if (keys2.includes(element) && object1[element] === object2[element]) {
        result = true;
      } else if (Array.isArray(object1[element]) && Array.isArray(object2[element])) {
        result = eqArrays(object1[element], object2[element]);
      } else {
        result = false;
      }
    });
  }
  return result;
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
//eqObjects(ab, abc); // => false

//assertArraysEqual(eqObjects(ab, ba), true);
//assertArrayEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//assertArrayEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//assertArrayEqual(eqObjects(cd, cd2), false); // => false

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