const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns 2, 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 2, 3);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(tail(['5']), '5'); 
  });
});
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);