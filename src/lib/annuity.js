'use strict';

/**
 * Function cumipmt
 * Returns the cumulative interest paid between two periods
 *
 * If rate ≤ 0, nper ≤ 0, or pv ≤ 0, cumipmt returns the #NUM! error value.
 * If start_period < 1, end_period < 1, or start_period > end_period, cumipmt returns the #NUM! error value.
 * If type is any number other than 0 or 1, cumipmt returns the #NUM! error value.
 *
 * @param {number} rate					The interest rate per period.
 * @param {number} nper					The total number of payment periods in an annuity.
 * @param {number} pv						The present value
 * @param {number} start_period The first period in the calculation.
 * 															Payment periods are numbered beginning with 1.
 * @param {number} end_period		The last period in the calculation.
 * @param {number} [type]				The number 0 or 1 and indicates when payments are due.
 * 															0 - at the end of the period (ordinary annuity).
 * 															1 - at the beginning of the period (annuity due).
 * 															If type is omitted, it is assumed to be 0. (TODO in Excel is required - why?)
 * @return {number}
 */
export function cumipmt(
	rate,
	nper,
	pv,
	start_period,
	end_period,
	type = 0,
) {}

// Returns the cumulative principal paid on a loan between two periods
export function cumprinc() {}

/**
 * Function fv
 * Returns the future value of an investment.
 *
 * @param {number} rate 	The interest rate per period.
 * @param {number} nper 	The total number of payment periods in an annuity.
 * @param {number} pmt 		The payment made each period; it cannot change over the life of the annuity.
 * 												Typically, pmt contains principal and interest but no other fees or taxes.
 * 												If pmt is omitted, you must include the pv argument. TODO (???)
 * @param {number} [pv] 	The present value, or the lump-sum amount that a series of
 * 												future payments is worth right now. If pv is omitted, it is assumed to be 0 (zero),
 * 												and you must include the pmt argument.
 * @param {number} [type] The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function fv(rate, nper, pmt, pv = 0, type = 0) {}

/**
 * Function ipmt
 * Returns the interest payment for an investment for a given period.
 *
 * @param {number} rate		The interest rate per period.
 * @param {number} per		The period for which you want to find the interest and must be in the range 1 to nper.
 * @param {number} nper		The total number of payment periods in an annuity.
 * @param {number} pv			The present value, or the lump-sum amount that a series of future payments is worth right now.
 * @param {number} [fv]		The future value, or a cash balance you want to attain after the last payment is made.
 * 												If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0).
 * @param {number} [type]	The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function ipmt(rate, per, nper, pv, fv = 0, type = 0) {}

/**
 * Function ispmt
 * Calculates the interest paid during a specific period of an investment.
 *
 * @param {number} rate The interest rate for the investment.
 * @param {number} per 	The period for which you want to find the interest, and must be between 1 and Nper.
 * @param {number} nper The total number of payment periods for the investment.
 * @param {number} pv 	The present value of the investment. For a loan, Pv is the loan amount.
 * @return {number}
 */
export function ispmt(rate, per, nper, pv) {}

/**
 * Function nper
 * Returns the number of periods for an investment based on
 * periodic, constant payments and a constant interest rate.
 *
 * @param {number} rate 	The interest rate per period.
 * @param {number} pmt		The payment made each period; it cannot change over the life of the annuity.
 * 												Typically, pmt contains principal and interest but no other fees or taxes.
 * @param {number} pv			The present value, or the lump-sum amount that a series of future payments is worth right now.
 * @param {number} [fv]		The future value, or a cash balance you want to attain after the last payment is made.
 * 												If fv is omitted, it is assumed to be 0 (the future value of a loan, for example, is 0).
 * @param {number} [type]	The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function nper(rate, pmt, pv, fv = 0, type = 0) {}

/**
 * Function pmt
 * Returns the periodic payment for an annuity

 * @param {number} rate		The interest rate per period.
 * @param {number} nper	 	The total number of payments in an annuity.
 * @param {number} pv			The present value, or the total amount that a series of future payments
 * 												is worth now; also known as the principal.
 * @param {number} [fv]		The future value, or a cash balance you want to attain after the last payment is made.
 * 												If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {number} [type] The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function pmt(rate, nper, pv, fv = 0, type = 0) {}

/**
 * Function ppmt
 * Returns the payment on the principal for a given period for an investment
 * based on periodic, constant payments and a constant interest rate.
 *
 * Make sure that you are consistent about the units you use for specifying rate and nper.
 * If you make monthly payments on a four-year loan at 12 percent annual interest,
 * use 12%/12 for rate and 4\*12 for nper.
 * If you make annual payments on the same loan, use 12% for rate and 4 for nper.
 *
 * @param {number} rate		The interest rate per period.
 * @param {number} per	 	Specifies the period and must be in the range 1 to nper.
 * @param {number} nper	 	The total number of payments in an annuity.
 * @param {number} pv			The present value, or the total amount that a series of future payments
 * 												is worth now; also known as the principal.
 * @param {number} [fv]		The future value, or a cash balance you want to attain after the last payment is made.
 * 												If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {number} [type] The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function ppmt(rate, per, nper, pv, fv = 0, type = 0) {}

/**
 * Function pv
 * Returns the present value of an investment
 *
 * Make sure that you are consistent about the units you use for specifying rate and nper.
 * If you make monthly payments on a four-year loan at 12 percent annual interest,
 * use 12%/12 for rate and 4\*12 for nper.
 * If you make annual payments on the same loan, use 12% for rate and 4 for nper.
 *
 * @param {number} rate		The interest rate per period.
 * @param {number} nper		The total number of payments in an annuity.
 * @param {number} pmt		The payment made each period; it cannot change over the life of the annuity.
 * @param {number} [fv]		The future value, or a cash balance you want to attain after the last payment is made.
 * 												If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {number} [type] The number 0 or 1 and indicates when payments are due.
 * 												0 - at the end of the period (ordinary annuity).
 * 												1 - at the beginning of the period (annuity due).
 * 												If type is omitted, it is assumed to be 0.
 * @return {number}
 */
export function pv(rate, nper, pmt, fv = 0, type = 0) {}

/**
 * Function rate
 * Returns the interest rate per period of an annuity
 *
 * TODO Fix comment after the implemetation of root search algorithm
 * TODO make a precision and maxIterations setters in main object
 * rate is calculated by iteration and can have zero or more solutions.
 * If the successive results of rate do not converge to within 0.0000001 after 20 iterations,
 * rate returns the #NUM! error value.
 *
 * @param {number} nper 		The total number of payments in an annuity.
 * @param {number} pmt			The payment made each period; it cannot change over the life of the annuity.
 * @param {number} pv				The present value, or the total amount that a series of future payments
 * 													is worth now; also known as the principal.
 * @param {number} [fv]			The future value, or a cash balance you want to attain after the last payment is made.
 * 													If fv is omitted, it is assumed to be 0 (zero), that is, the future value of a loan is 0.
 * @param {number} [type]		The number 0 or 1 and indicates when payments are due.
 * 													0 - at the end of the period (ordinary annuity).
 * 													1 - at the beginning of the period (annuity due).
 * @param {number} [guess]  Your guess for what the rate will be.
 * 													If you omit guess, it is assumed to be 10 percent.
 * @return {number}
 */
export function rate(nper, pmt, pv, fv = 0, type = 0, guess = 0.1) {}
