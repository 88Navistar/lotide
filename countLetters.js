// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(word) {
  let numLetter = {};
  for (const letter of word) {
    if (letter === ' ') {
      continue;
    } else if (!numLetter[letter]) {
      numLetter[letter] = 1;
  
    } else {
      numLetter[letter] += 1;
    }
    
  } return numLetter;
};

