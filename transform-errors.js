const { List } = require("immutable");

function lazyCurry(fn) {
  return (...args) => fn.bind(null, ...args);
}
const map = lazyCurry((fn, arr) => arr.map(fn));
function mapWith(...args) {
  return lazyCurry((fn, arr) => arr.map(fn.bind(null, [...args])));
}
function pipe(...fns) {
  return (x) => fns.reduce((v, f) => f(v), x);
}

function concat(keys, map) {
  return map.join(". ") + ".";
}

function unique(keys, map) {
  return map.toSet().toList();
}

function traverse(keys, map) {
  if (List.isList(map) && map.every((x) => typeof x === "string"))
    return map.map(unique.bind(null, keys)).map(concat.bind(null, keys));
  return map.map(traverse.bind(null, keys));
}

function flatten(keys, map, key) {
  if (keys.indexOf(key) !== -1) return map;
  return map.toList().flatten(false);
}

function transform(...args) {
  return pipe(mapWith(...args)(flatten), mapWith(...args)(traverse));
}

module.exports = (errors, ...args) => transform(...args)(errors);
