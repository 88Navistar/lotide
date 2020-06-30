// FUNCTION IMPLEMENTATION
  const findKeyByValue = (object, value) => {
    return Object.keys(object).find(key => object[key] === value);
  };
//CLASSIC For Loop
// const findKeyByValue = (obj, value) => {
//   for (let key in obj) {
//     console.log(key);
//     if (obj[key] === value) {
//       return key
//     } else {
//       return undefined
//     }
//   } 
// };
module.exports = findKeyByValue;