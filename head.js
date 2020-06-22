const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function (list) {
  
  return list[0];
};
console.log(head(['w']))
assertEqual(head(['5,6,7']), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

//module.exports = head;