// FUNCTION IMPLEMENTATION
  function findKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }
//CLASSIC For Loop
const findKeyByValue = (obj, value) => {
  for (let key in obj) {
    console.log(key);
    if (obj[key] === value) {
      return key
    } else {
      return undefined
    }
  } 
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
