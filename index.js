
module.exports = function* walk(object) {
  var search = yield object;
  if(!search) return;

  if(object instanceof Object)
    object = Object.keys(object).map(key => object[key]);

  if(object instanceof Array) {
    for(obj of object) {
      yield* walk(obj);
    }
  }
}
