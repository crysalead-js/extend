var baseExtend = require("./base-extend");

/**
 * Merges the object in the first argument in a deep way.
 *
 * Note: -- values ARE NOT cloned --
 *
 * @param  Object* ... A list of objects with target first (target, obj1, [obj2], ..., [objN]).
 * @return Object      The merged object.
 */
module.exports = function() {
  return baseExtend(arguments, true);
}
