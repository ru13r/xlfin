'use strict';
/**
 * Function fvschedule
 * Returns the future value of an initial principal after applying a series of compound interest rates.
 * Use fvschedule to calculate the future value of an investment with a variable or adjustable rate.
 *
 * The values in schedule can be numbers or blank cells;
 * any other value produces the #VALUE! error value for fvschedule.
 * Blank cells are taken as zeros (no interest).
 *
 * @param {number} principal Required. The present value.
 * @param {number[]} schedule Required. An array of interest rates to apply.
 * @return {number}
 */
export function fvschedule(principal, schedule) {
	return (
		principal * schedule.reduce((acc, rate) => acc * (1 + rate), 1)
	);
}

/**
 * Function pduration
 * Returns the number of periods required by an investment to reach a specified value
 *
 * pduration requires that all arguments are positive values.
 * If argument values are not valid, pduration returns the #NUM! error value.
 * If arguments are not using valid data types, pduration returns the #VALUE! error value.
 *
 * @param rate {number} Required. Rate is the interest rate per period.
 * @param pv {number} Required. Pv is the present value of the investment.
 * @param fv {number} Required. Fv is the desired future value of the investment.
 * @return {number}
 */
export function pduration(rate, pv, fv) {
	const log = Math.log;
	return (log(fv) - log(pv)) / log(1 + rate);
}

/**
 * Function rri
 * Returns an equivalent interest rate for the growth of an investment
 *
 * If argument values are not valid, rri returns the #NUM! error value.
 * If arguments are not using valid data types, rri returns the #VALUE! error value.
 *
 * @param {number} nper Required. Nper is the number of periods for the investment.
 * @param {number} pv Required. Pv is the present value of the investment.
 * @param {number} fv Required. Fv is the future value of the investment.
 * @return {number}
 */
export function rri(nper, pv, fv) {
	return Math.pow(fv, 1 / nper) / pv - 1;
}
