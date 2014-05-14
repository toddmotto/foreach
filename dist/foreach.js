/*! foreach v1.0.0 | (c) 2014 @toddmotto | github.com/toddmotto/foreach */
var forEach = function (collection, callback, scope) {
  if (Object.prototype.toString.call(collection) === '[object Object]') {
    for (var prop in collection) {
      if (Object.prototype.hasOwnProperty.call(collection, prop)) {
        callback.call(scope, collection[prop], prop, collection);
      }
    }
  } else {
<<<<<<< HEAD
    for (var i = 0; i < collection.length; i++) {
      callback.call(scope, collection[i], i, collection);
=======
    for (var i = 0, len = collection.length; i < len; i++) {
      callback.call(scope, i, collection[i]);
>>>>>>> c12811fe680d82749876222858b32c18ede70f4d
    }
  }
};
