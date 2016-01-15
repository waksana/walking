# walk-object

walk through the object

遍历对象

## Installation

```
$ npm install walking
```

## Example

```js
var walking = require('walking');

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
  console.log(o.join(', '));
};

walking(object_to_walk, cond, handler); // => 2, 4, 6, 8, 10

//after walk object_to_walk.c = [2, 4, 6, 8, 10]
```

## API

### walking(object, cond_fn, handler_fn)

遍历object对象，根据cond_fn找出需要的子孙，使用handler_fn处理

# License

MIT
