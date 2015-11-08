var baseExtend = require("./base-extend");

/**
 * Blends objects in a deep way.
 *
 * Note: -- also merges non plain object together --
 * Note: -- values ARE NOT cloned --
 *
 * @param  Object* ... A list of objects to blend (target, obj1, [obj2], ..., [objN]).
 * @return Object      The blended object.
 */
module.exports = function() {
  return baseExtend(arguments, true, function(value) {
    return value !== null && typeof value === 'object';
  });
}
