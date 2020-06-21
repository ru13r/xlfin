'use strict';

/* common functions */

/**
 * Function diffInDays
 * Returns the number of days between two dates
 * Time and timezone are not taken into account
 *
 * @param {Date} a
 * @param {Date} b
 * @return {number}
 */
exports.diffInDays = (a, b) => {
	// Discard the time and time-zone information.
	const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
	const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
	return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
};

/**
 * Tests whether or not an object is a non-empty array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *      _isArray([]); //=> false
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
exports.isNonEmptyArray = (val) =>
	val != null &&
	val.length > 0 &&
	Object.prototype.toString.call(val) === '[object Array]';
