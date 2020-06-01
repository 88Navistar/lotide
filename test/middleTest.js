const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return the middle number 4", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it("should return an empty array", () => {
    assert.deepEqual(middle([2]), []);
  });
  it("should return middle two numbers 2 & 3", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("should return an empty array", () => {
    assert.deepEqual(middle([2, 2]), []);
  });


});

