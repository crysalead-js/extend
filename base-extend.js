/**
 * Extends/merges the object in the first argument.
 *
 * Note: -- values ARE NOT cloned --
 *
 * @param  Object*  ...       A list of objects with target first (target, obj1, [obj2], ..., [objN]).
 * @param  Boolean  deep      Indicates a shallow extend if `false` or a deep merge if `true`.
 * @param  Function mergeable Merging strategy.
 * @return Object             The extended/merged object.
 */
function baseExtend(args, deep, mergeable) {
  var i, j, obj, src, key, keys, len;
  var target = args[0];
  var length = args.length;

  for (i = 1; i < length; ++i) {

    obj = args[i];
    if ((obj === null || typeof obj !== 'object') && typeof obj !== 'function'){
      continue;
    }

    keys = Object.keys(obj);
    len = keys.length;

    for (j = 0; j < len; j++) {
      key = keys[j];
      src = obj[key];

      if (deep && mergeable(src)) {
        if (mergeable(target[key])) {
          baseExtend([target[key], src], true, mergeable);
        } else if (src !== undefined) {
          target[key] = src;
        }
      } else if (src !== undefined) {
        target[key] = src;
      }
    }
  }
  return target;
}

module.exports = baseExtend;
