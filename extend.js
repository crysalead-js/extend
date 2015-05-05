var baseExtend = require("./base-extend");

/**
 * Extends the object in the first argument.
 *
 * Note: -- values ARE NOT cloned --
 *
 * @param  Object* ... A list of objects with target first (target, obj1, [obj2], ..., [objN]).
 * @return Object      The extended object.
 */
module.exports = function() {
  return baseExtend(arguments, false);
}
