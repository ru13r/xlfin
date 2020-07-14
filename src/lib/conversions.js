'use strict';
/**
 * Function effect
 * Returns the effective annual interest rate, given the nominal annual interest rate
 * and the number of compounding periods per year.
 *
 * Npery is truncated to an integer.
 * If either argument is nonnumeric, effect returns the #VALUE! error value.
 * If nominal_rate ≤ 0 or if npery < 1, effect returns the #NUM! error value.
 *
 * @param {number} nominal_rate	The nominal interest rate.
 * @param {number} npery 				The number of compounding periods per year.
 * @return {number}
 */
export function effect(nominal_rate, npery) {}

/**
 * Function nominal
 * Returns the nominal annual interest rate, given the effective annual interest rate
 * and the number of compounding periods per year.
 *
 * Npery is truncated to an integer.
 * If either argument is nonnumeric, nominal returns the #VALUE! error value.
 * If effect_rate ≤ 0 or if npery < 1, nominal returns the #NUM! error value.
 * nominal (effect_rate,npery) is related to effect(nominal_rate,npery) through
 * effective_rate=(1+(nominal_rate/npery))*npery -1.
 *
 * @param {number} effect_rate 	The effective interest rate.
 * @param {number} npery 				The number of compounding periods per year.
 * @return {number}
 */
export function nominal(effect_rate, npery) {
	return 0;
}

/**
 * Function dollarde
 * Converts a dollar price expressed as an integer part and a fraction part, such as 1.02, into a dollar price
 * expressed as a decimal number. Fractional dollar numbers are sometimes used for security prices.
 * The fraction part of the value is divided by an integer that you specify.
 * For example, if you want your price to be expressed to a precision of 1/16 of a dollar,
 * you divide the fraction part by 16. In this case, 1.02 represents $1.125 ($1 + 2/16 = $1.125).
 *
 * If fraction is
 *
 *  - not an integer, it is truncated.
 *  - less than 0, dollarde returns the #NUM! error value.
 *  - greater than or equal to 0 and less than 1, dollarde returns the #DIV/0! error value.
 *
 * @param {number} fractional_dollar 	A number expressed as an integer part and a fraction part,
 * 																		separated by a decimal symbol.
 * @param {number} fraction 					The integer to use in the denominator of the fraction.
 * @return {number}
 */
export function dollarde(fractional_dollar, fraction) {}

/**
 * Function dollarfr
 * Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction.
 *
 * If fraction is
 * 	- not an integer, it is truncated.
 *  - less than 0, dollarfr returns the #NUM! error value.
 *  - 0, dollarfr returns the #DIV/0! error value.

 * @param {number} decimal_dollar A decimal number.
 * @param {number} fraction 			The integer to use in the denominator of a fraction.
 * @return {number}
 */
export function dollarfr(decimal_dollar, fraction) {}
