/* */ 
var baseToPath = require('./baseToPath'),
    isIndex = require('./isIndex'),
    isKey = require('./isKey'),
    last = require('../last'),
    parent = require('./parent');
var arrayProto = global.Array.prototype;
var splice = arrayProto.splice;
function basePullAt(array, indexes) {
  var length = array ? indexes.length : 0,
      lastIndex = length - 1;
  while (length--) {
    var index = indexes[length];
    if (lastIndex == length || index != previous) {
      var previous = index;
      if (isIndex(index)) {
        splice.call(array, index, 1);
      } else if (!isKey(index, array)) {
        var path = baseToPath(index),
            object = parent(array, path);
        if (object != null) {
          delete object[last(path)];
        }
      } else {
        delete array[index];
      }
    }
  }
  return array;
}
module.exports = basePullAt;
