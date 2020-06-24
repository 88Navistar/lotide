// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let counter = {};

  for (let value of str) {
    if (value === ' ') {
      continue;
    } else {
      counter[value] = (counter[value] || 0) + 1;
    }
  }
  return counter;
};
countLetters("lighthouse in the house");
console.log(countLetters("lighthouse in the house"));

// Old If statement before refactor
// if (value === ' ') {
//   continue;
// } else if (!counter[value]) {
//   counter[value] = 1
//} else {
///   counter[value] += 1

