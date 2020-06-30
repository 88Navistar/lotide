const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns 1", () => {
    assert.deepEqual(letterPositions("hello").e, [1]); 
  });
});

//(letterPositions('lighthouse labs is the place to be'))
//console.log(countLetters('lighthouse labs is the place to be'));

//assertArraysEqual(letterPositions("hello").e, [1]);