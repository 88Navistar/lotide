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

const letterPositions = function(sentence) {
  const results = {};
    for (let i = 0; i < sentence.length; i++) {
      let letter = sentence[i];
      if (letter === ' ') {
        continue;
      } else if (!results[letter]) {
        results[letter] = [i];
    
      } else {
        results[letter].push(i);
      }
      
    } return results;
  };
console.log(letterPositions('lighthouse labs is the place to be'))
//console.log(countLetters('lighthouse labs is the place to be'));

assertArraysEqual(letterPositions("hello").e, [1]);
