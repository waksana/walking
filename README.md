# walking

walk through the object

遍历对象

## Installation

```
$ npm install walking
```

## Example

```js
var walking = require('walking');

const obj = {a: {c: [1, 'd', undefined]}, b: [{e: {f: ['g']}}, [1, {h:1}, {i:2}]]}

var walk = walking(obj);

//the root object
walk.next() //==> {a: {c: [1, 'd', undefined]}, b: [{e: {f: ['g']}}, [1, {h:1}, {i:2}]]}

//search deeper
walk.next() // ==> {c: [1, 'd', undefined]}
walk.next() // ==> [1, 'd', undefined]
walk.next() // ==> 1

```

## API

### walking(object)

遍历object对象返回生成器

# License

MIT
