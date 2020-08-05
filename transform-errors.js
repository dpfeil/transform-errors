
function lazyCurry(fn) { return (...args) => fn.bind(null, ...args); };
const map = lazyCurry((fn, arr) => arr.map(fn));


function concat (map) {
  return map.join(". ") + ".";
}

function unique (map) {
  return map.toSet().toList();
}

function flatten (map) {
  return concat(unique(map.toList().flatten(false)));
}


module.exports = map(flatten);


