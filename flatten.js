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
module.exports = flatten;

