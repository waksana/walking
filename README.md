# walk-object
object walking serial

```javascript
var walk = require('walk-object');

var object_to_walk = {
  a: 1,
  b: [1, 3, 5],
  c: [2, 4, 6, 8]
};

var cond_fn = function(o) {
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
  console.log(o.join(', '));
};

walk(object_to_walk, cond_fn, handler); // => 2, 4, 6, 8, 10
//after walk object_to_walk.c = [2, 4, 6, 8, 10]
```
