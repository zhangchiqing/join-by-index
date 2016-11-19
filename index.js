var R = require('ramda');

module.exports = R.curry(function(
  indexFieldOfA, // (a -> c)
  indexFieldOfB, // (b -> c)
  makeDFromAB, // (a?, b) -> d
  as, // [a]
  bs // [b]
) { // -> [d]
  // Map c a
  var aMap = R.indexBy(indexFieldOfA, as);
  return R.map(function(b) {
    var c = indexFieldOfB(b);
    // a?
    var maybeA = aMap[c];
    return makeDFromAB(maybeA, b);
  }, bs);
});
