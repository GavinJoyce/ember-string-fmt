import { inspect } from '@ember/debug';
import { isArray } from '@ember/array';

export default function(str, formats) {
  var cachedFormats = formats;

  if (!isArray(cachedFormats) || arguments.length > 2) {
    cachedFormats = new Array(arguments.length - 1);

    for (var i = 1, l = arguments.length; i < l; i++) {
      cachedFormats[i - 1] = arguments[i];
    }
  }

  // first, replace any ORDERED replacements.
  var idx  = 0; // the current index for non-numerical replacements
  return str.replace(/%@([0-9]+)?/g, function(s, argIndex) {
    argIndex = (argIndex) ? parseInt(argIndex, 10) - 1 : idx++;
    s = cachedFormats[argIndex];
    s = typeof s === 'string' ? s : inspect(s);
    return (s === null) ? '(null)' : (s === undefined) ? '' : s;
  });
}
