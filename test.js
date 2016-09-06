
var walking = require('.');
var assert = require('assert');

var obj = {
  a: 1,
  b: [1, 3, 5],
  c: [2, 4, 6, 8]
};

var walk = walking(obj);

walk.next();
assert.equal(obj.a, walk.next().value);
assert.equal(obj.b, walk.next().value);
assert.equal(obj.b[0], walk.next().value);
assert.equal(obj.b[1], walk.next().value);
assert.equal(obj.b[2], walk.next().value);
assert.equal(obj.c, walk.next().value);
assert.equal(2, walk.next().value);
assert.equal(4, walk.next().value);
assert.equal(6, walk.next().value);
assert.equal(8, walk.next().value);
