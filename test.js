
var walking = require('.');
var assert = require('assert');

var object_to_walk = {
  a: 1,
  b: [1, 3, 5],
  c: [2, 4, 6, 8]
};

var cond = function(o) {
  if(o.length) {
    if(o.length == 3) {
      //1 means the right object
      return 1;
    }
    else {
      //-1 means stop search in this branch
      return -1;
    }
  }
  else {
    //0 means search deep
    //you can return a promise
    return Promise.resolve(0);
  }
};

var handler = function(o) {
  o.push(10);
};

walking(object_to_walk, cond, handler).then(function() {
  assert(object_to_walk.b.length == 4);
  assert(object_to_walk.b[3] == 10);
}).catch(function(e) {
  console.error(e.stack);
  process.exit(1);
});
