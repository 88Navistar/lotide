const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = (array) => array.slice(1);

const array = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(array))
assertEqual(array.length, 3); // original array should still have 3 elements!


//module.exports = tail;

