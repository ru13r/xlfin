'use strict';

/* common functions */

/**
 * Tests if any argument is undefined or null
 * @param args
 * @return {boolean}
 */
exports.hasRequiredArgs = (...args) =>
	!(
		args !== undefined &&
		args.some(x => x === undefined || x === null)
	);

/**
 * Tests whether or not an object is a non-empty array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *      isNonEmptyArray([]); //=> false
 *      isNonEmptyArray(null); //=> false
 *      isNonEmptyArray({}); //=> false
 */
exports.isNonEmptyArray = val =>
	val != null &&
	val.length > 0 &&
	Object.prototype.toString.call(val) === '[object Array]';
