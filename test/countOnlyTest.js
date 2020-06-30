const assert = require('chai').assert;
const countOnly = require('../countOnly');

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = (firstNames, { "Jason": true, "Karima": true, "Fang": true });

describe("#countOnly", () => {
  it('returns true when passed  "Fang" from the object "firstNames', () => {
    assert.deepEqual(result1["Fang"], true);
  });
  
});
