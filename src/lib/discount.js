'use strict';

/**
 * Function disc
 * Returns the discount rate for a security
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid serial date number, returns the #VALUE! error value.
 * If pr ≤ 0 or if redemption ≤ 0, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} 		settlement 	settlement date (the date when the security is purchased.)
 * @param {Date} 		maturity		maturity date (the date when the security expires)
 * @param {number} 	pr					price per $100 face value (par)
 * @param {number} 	redemption	redemption value per $100 face value
 * @param {number} 	[basis]			the type of day count basis to use
 * 															0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
export function disc(settlement, maturity, pr, redemption, basis = 0) {}

/**
 * Function intrate
 * Returns the interest rate for a fully invested security
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If pr ≤ 0 or if redemption ≤ 0, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date}		settlement 	settlement date (the date when the security is purchased)
 * @param {Date} 		maturity		maturity date (the date when the security expires)
 * @param {number} 	investment	the amount invested in the security
 * @param {number} 	redemption	the amount to be received at maturity
 * @param {number} 	[basis]			the type of day count basis to use
 * 															0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
export function intrate(
	settlement,
	maturity,
	investment,
	redemption,
	basis = 0,
) {}

//

/**
 * Function pricedisc
 * Returns the price per $100 face value of a discounted security
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If pr ≤ 0 or if redemption ≤ 0, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} discount		the security's discount rate
 * @param {number} redemption	the security's redemption value per $100 face value
 * @param {number} [basis]		the type of day count basis to use
 * 														0 - US (NASD) 30/360 (used by default)
 * 														1 - Actual/actual
 * 														2 - Actual/360
 * 														3 - Actual/365
 * 														4 - European 30/360
 * @return {number}
 */
export function pricedisc(
	settlement,
	maturity,
	discount,
	redemption,
	basis = 0,
) {}

/**
 * Function received
 * Returns the amount received at maturity for a fully invested security
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If pr ≤ 0 or if redemption ≤ 0, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} investment	the amount invested in the security
 * @param {number} discount		the security's discount rate
 * @param {number} [basis]		the type of day count basis to use
 * 														0 - US (NASD) 30/360 (used by default)
 * 														1 - Actual/actual
 * 														2 - Actual/360
 * 														3 - Actual/365
 * 														4 - European 30/360
 * @return {number}
 */
export function received(
	settlement,
	maturity,
	investment,
	discount,
	basis = 0,
) {}

//
/**
 * Function yielddisc
 * Returns the annual yield for a discounted security; for example, a Treasury bill
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If pr ≤ 0 or if redemption ≤ 0, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} pr					price per $100 face value (par)
 * @param {number} redemption	the security's redemption value per $100 face value
 * @param {number} [basis]		the type of day count basis to use
 * 														0 - US (NASD) 30/360 (used by default)
 * 														1 - Actual/actual
 * 														2 - Actual/360
 * 														3 - Actual/365
 * 														4 - European 30/360
 * @return {number}
 */
export function yielddisc(
	settlement,
	maturity,
	pr,
	redemption,
	basis = 0,
) {}
