'use strict';
/**
 * Function COUPDAYBS
 * Returns the number of days from the beginning of the coupon period to the settlement date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPDAYBS = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};

/**
 * Function COUPDAYS
 * Returns the number of days in the coupon period that contains the settlement date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPDAYS = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};

/**
 * Function COUPDAYSNC
 * Returns the number of days from the settlement date to the next coupon date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPDAYSNC = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};

/**
 * Function COUPNCD
 * Returns the next coupon date after the settlement date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPNCD = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};

/**
 * Function COUPNUM
 * Returns the number of coupons payable between the settlement date and maturity date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPNUM = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};

/**
 * Function COUPPCD
 * Returns the previous coupon date before the settlement date
 *
 * All arguments are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
exports.COUPPCD = function (
	settlement,
	maturity,
	frequency,
	basis = 0,
) {};
