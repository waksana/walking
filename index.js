
module.exports = function* walk(object) {
  yield object;

  if(object instanceof Object)
    object = Object.keys(object).map(key => object[key]);

  if(object instanceof Array) {
    for(obj of object) {
      yield* walk(obj);
    }
  }
}
