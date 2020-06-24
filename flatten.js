const flatten = items => {
  const flatArr = [];
  items.forEach(item => {
    if (Array.isArray(item)) {
      flatArr.push(...flatten(item));
    } else {
      flatArr.push(item);
    }
  });
  return flatArr;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])