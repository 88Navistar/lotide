const takeUntil = function(array, callback) {
  const output = [];
  for (let i = 0; !callback(array[i]); i++) {
    output.push(array[i])
  }
  return output;
}

// Expected Input
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// [1, 2, 5, 7, 2]
// ---
//   ['I\'ve', 'been', 'to', 'Hollywood']

// let negFound = false;
// const results1 = data1.filter((item) => {
//   if(item > 0 && !negFound) {
//     return item
//   } else {
//     negFound = true
//   }
// })