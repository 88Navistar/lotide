// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
// const findKeyByValue = function(object, value) {
//    for (let key of Object.keys(object)) {
//      if (value !== key) {
//         return undefined
//      } else 
//     return key
//    }
//   };
  function findKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// let user = {
//   name: "John",
//   age: 30
// };

// // loop over values
// for (let value of Object.values(user)) {
//   alert(value); // John, then 30
// }