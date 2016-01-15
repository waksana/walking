module.exports = function(object, cond, handler) {
  function walk(object) {
    if(!object) return Promise.resolve();
    var cmd = cond(object);
    return Promise.resolve(cmd).then(function(cmd) {
      if(cmd == -1) return;
      if(cmd == 1) return handler(object);
      if(object instanceof Array) {
        return object.reduce(function(chain, o) {
          return chain.then(function() { return walk(o); });
        }, Promise.resolve());
      }
      if(object instanceof Object) {
        return Object.keys(object).map(function(key) {
          return object[key]
        }).reduce(function(chain, o) {
          return chain.then(function() { return walk(o) });
        }, Promise.resolve());
      }
      return Promise.resolve();
    });
  };
  return walk(object);
};
