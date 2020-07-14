'use strict';
// Returns the internal rate of return for a series of cash flows
/**
 * Function irr
 * Returns the internal rate of return
 * for a series of cash flows represented by the numbers in values.
 * These cash flows do not have to be even, as they would be for an annuity.
 * However, the cash flows must occur at regular intervals, such as monthly or annually.
 * The internal rate of return is the interest rate received for an investment
 * consisting of payments (negative values) and income (positive values) that occur at regular periods.
 *
 * Values must contain at least one positive value and one negative value to calculate the internal rate of return.
 * irr uses the order of values to interpret the order of cash flows. Be sure to enter your payment and income values in the sequence you want.
 * If an array or reference argument contains text, logical values, or empty cells, those values are ignored.
 *
 * TODO make a precision and maxIterations setters in main object
 * TODO fix this comment later
 * An iterative technique is used for calculating irr. Starting with guess,
 * irr cycles through the calculation until the result is accurate within 0.00001 percent.
 * If irr can't find a result that works after 20 tries, the #NUM! error value is returned.
 *
 * If irr gives the #NUM! error value, or if the result is not close to what you expected,
 * try again with a different value for guess.
 *
 * @param {number[]} 	values	An array of numbers for which you want to calculate the internal rate of return.
 * @param {number} 		[guess] A number that you guess is close to the result of irr.
 * 														If guess is omitted, it is assumed to be 0.1 (10 percent).
 * @return {number}
 */
export function irr(values, guess = 0.1) {}

//

/**
 * Function npv
 * Returns the net present value of an investment based on a series of periodic cash flows and a discount rate
 * The npv investment begins one period before the date of the value1 cash flow and ends
 * with the last cash flow in the list. The npv calculation is based on future cash flows.
 * If your first cash flow occurs at the beginning of the first period, the first value must
 * be added to the npv result, not included in the values arguments.
 *
 * Arguments that are empty cells, logical values,
 * or text representations of numbers, error values, or text that cannot be translated into numbers are ignored.
 *
 * @param {number} rate			The rate of discount over the length of one period.
 * @param {number[]} values	An array of numbers for which you want to calculate the present value.
 * @return {number}
 */
export function npv(rate, values) {
	return values.reduce(
		(npv, cf, i) => npv + cf / Math.pow(1 + rate, i + 1),
		0,
	);
}

/**
 * Function mirr
 * Returns the modified internal rate of return for a series of periodic cash flows.
 * mirr considers both the cost of the investment and the interest received on reinvestment of cash.
 *
 * @param {number} values					An array of numbers.
 * @param {number} finance_rate		The interest rate you pay on the money used in the cash flows.
 * @param {number} reinvest_rate	The interest rate you receive on the cash flows as you reinvest them.
 * @return {number}
 */
export function mirr(values, finance_rate, reinvest_rate) {}

// Returns the internal rate of return for a schedule of cash flows that is not necessarily periodic.
// To calculate the internal rate of return for a series of periodic cash flows, use the irr function.

/**
 * An iterative technique is used for calculating xirr. Starting with guess,
 * xirr cycles through the calculation until the result is accurate within 0.000001 percent.
 * If xirr can't find a result that works after 100 tries, the #NUM! error value is returned.
 * TODO make a precision and maxIterations setters in main object
 * TODO fix this comment later
 * If xirr gives the #NUM! error value, or if the result is not close to what you expected,
 * try again with a different value for guess.
 *
 * Numbers in dates are truncated to integers.
 * xirr expects at least one positive cash flow and one negative cash flow; otherwise,
 * xirr returns the #NUM! error value.
 * If any number in dates is not a valid date, xirr returns the #VALUE! error value.
 * If any number in dates precedes the starting date, xirr returns the #NUM! error value.
 * If values and dates contain a different number of values, xirr returns the #NUM! error value.
 *
 * @param {number[]} 	values	An array of numbers that correspond a schedule of payments in dates
 * 														for which you want to calculate the internal rate of return.
 * 														The first payment is optional and corresponds to a cost or payment that occurs
 * 														at the beginning of the investment. If the first value is a cost or payment,
 * 														it must be a negative value. All succeeding payments are discounted based on a 365-day year.
 * 														The series of values must contain at least one positive and one negative value.
 * @param {Date[]} 		[dates] A schedule of payment dates that corresponds to the cash flow payments.
 * 														Dates shall be Date objects. Dates may occur in any order.
 * @param {number} 		[guess] A number that you guess is close to the result of irr.
 * 														If guess is omitted, it is assumed to be 0.1 (10 percent).
 * @return {number}
 */
export function xirr(values, dates, guess = 0.1) {}

/**
 * Function xnpv
 * Returns the net present value for a schedule of cash flows that is not necessarily periodic.
 * To calculate the net present value for a series of cash flows that is periodic, use the npv function.
 *
 * Numbers in dates are truncated to integers.
 * TODO port excel errors to Node exception objects
 * TODO fix the comments (search and remove #NUM and #VALUE everywhere in the src)
 * If any argument is nonnumeric, xnpv returns the #VALUE! error value.
 * If any number in dates is not a valid date, xnpv returns the #VALUE! error value.
 * If any number in dates precedes the starting date, xnpv returns the #NUM! error value.
 * If values and dates contain a different number of values, xnpv returns the #NUM! error value.
 *
 * @param {number} 		rate		The discount rate to apply to the cash flows.
 * @param {number[]} 	values	An array of numbers that correspond a schedule of payments in dates
 * 														for which you want to calculate the present value.
 * 														The first payment is optional and corresponds to a cost or payment that occurs
 * 														at the beginning of the investment. If the first value is a cost or payment,
 * 														it must be a negative value. All succeeding payments are discounted based on a 365-day year.
 * 														The series of values must contain at least one positive and one negative value.
 * @param {Date[]} 		[dates] A schedule of payment dates that corresponds to the cash flow payments.
 * 														Dates shall be Date objects. Dates may occur in any order.
 * @constructor
 */
export function xnpv(rate, values, dates) {}
