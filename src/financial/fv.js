'use strict';
/**
 * Function FVSCHEDULE
 * Returns the future value of an initial principal after applying a series of compound interest rates.
 * Use FVSCHEDULE to calculate the future value of an investment with a variable or adjustable rate.
 *
 * The values in schedule can be numbers or blank cells;
 * any other value produces the #VALUE! error value for FVSCHEDULE.
 * Blank cells are taken as zeros (no interest).
 *
 * @param {number} principal Required. The present value.
 * @param {number[]} schedule Required. An array of interest rates to apply.
 * @return {number}
 */
exports.FVSCHEDULE = function (principal, schedule) {
	return (
		principal * schedule.reduce((acc, rate) => acc * (1 + rate), 1)
	);
};

/**
 * Function PDURATION
 * Returns the number of periods required by an investment to reach a specified value
 *
 * PDURATION requires that all arguments are positive values.
 * If argument values are not valid, PDURATION returns the #NUM! error value.
 * If arguments are not using valid data types, PDURATION returns the #VALUE! error value.
 *
 * @param rate {number} Required. Rate is the interest rate per period.
 * @param pv {number} Required. Pv is the present value of the investment.
 * @param fv {number} Required. Fv is the desired future value of the investment.
 * @return {number}
 */
exports.PDURATION = function (rate, pv, fv) {
	const log = Math.log;
	return (log(fv) - log(pv)) / log(1 + rate);
};

/**
 * Function RRI
 * Returns an equivalent interest rate for the growth of an investment
 *
 * If argument values are not valid, RRI returns the #NUM! error value.
 * If arguments are not using valid data types, RRI returns the #VALUE! error value.
 *
 * @param {number} nper Required. Nper is the number of periods for the investment.
 * @param {number} pv Required. Pv is the present value of the investment.
 * @param {number} fv Required. Fv is the future value of the investment.
 * @return {number}
 */
exports.RRI = function (nper, pv, fv) {
	return Math.pow(fv, 1 / nper) / pv - 1;
};
