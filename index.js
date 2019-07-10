
module.exports = function* walk(object) {
  const skip = yield object;

  if(!skip) {
    if(object instanceof Object)
      object = Object.keys(object).map(key => object[key]);

    if(object instanceof Array) {
      for(obj of object) {
        yield* walk(obj);
      }
    }
  }
}
