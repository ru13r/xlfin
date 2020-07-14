'use strict';
import { hasRequiredArgs } from '@/_internal';
import {
	daysBetween,
	addDate,
	getDaysInYear,
} from '@/_internal/dates';
import { splitDate } from '../_internal/dates';

// check valid range for frequency and basis
// TODO move validators to a separate file
const validDate = x => x instanceof Date && !isNaN(x.getDate());
const validFrequency = x => [1, 2, 4].includes(x);
const validBasis = x => [0, 1, 2, 3, 4].includes(x);

// TODO make common argument validators
const argsValidator = (
	funcName,
	settlement,
	maturity,
	frequency,
	basis,
) => {
	if (!hasRequiredArgs(settlement, maturity, frequency)) {
		throw new Error(funcName + ' is missing required arguments.');
	}
	if (!validDate(settlement)) {
		throw new TypeError(
			funcName +
				': #VALUE error - settlement argument ' +
				settlement +
				' is not a valid Date.',
		);
	}
	if (!validDate(maturity)) {
		throw new TypeError(
			funcName +
				': #VALUE error - maturity argument ' +
				maturity +
				' is not a valid Date.',
		);
	}
	if (!validFrequency(frequency)) {
		throw new RangeError(
			funcName +
				': #NUM error - frequency can be equal to 1, 2 or 4, received ' +
				frequency +
				' instead.',
		);
	}
	if (!validBasis(basis)) {
		throw new RangeError(
			funcName +
				': #NUM error - basis can be integer in range from 0 to 4, received ' +
				basis +
				' instead.',
		);
	}
	if (daysBetween(settlement, maturity) <= 0) {
		throw new RangeError(
			funcName +
				': #NUM error - settlement date shall be before maturity date.',
		);
	}
	return true;
};
// TODO make basis an enum
// TODO make frequency an enum
/**
 * Returns the number of days from the beginning of the coupon period to the settlement date
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  														0 - US (NASD) 30/360 (used by default),
 * 															1 - Actual/actual,
 * 															2 - Actual/360,
 * 															3 - Actual/365,
 * 															4 - European 30/360.
 * @return {number}
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 */
export function coupdaybs(
	settlement,
	maturity,
	frequency,
	basis = 0,
) {
	argsValidator('coupdaybs', settlement, maturity, frequency, basis);
	let pcd = couppcd(settlement, maturity, frequency, basis);
	return daysBetween(pcd, settlement, basis);
	// if (!basis30(basis)) {
	// 	return daysBetween(pcd, settlement);
	// } else {
	// 	let eom = endOfMonth(pcd);
	// 	if (+settlement <= +eom) {
	// 		return daysBetween(pcd, settlement) + 1;
	// 	}
	// 	// todo check leap year
	// 	// todo check if maturity is EOM
	// 	let days =
	// 		daysBetween(pcd, eom) - (eom.getUTCDate() > 30 ? 1 : 0);
	// 	while (eom < settlement) {
	// 		days = days + 30;
	// 		eom = endOfMonth(addDate(eom, 0, 0, 1));
	// 	}
	// 	days =
	// 		days - 30 + daysBetween(begOfMonth(settlement), settlement) + 1;
	// 	return days;
	//}
}

/**
 * Returns the number of days in the coupon period that contains the settlement date
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  														0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 */
export function coupdays(settlement, maturity, frequency, basis = 0) {
	argsValidator('coupdays', settlement, maturity, frequency, basis);
	if (basis === 1) {
		let pcd = couppcd(settlement, maturity, frequency, basis);
		let next = addDate(pcd, 0, 12 / frequency, 0);
		return daysBetween(pcd, next);
	}
	// todo make testing more extensive - is it safe to do rounding here
	return Math.round(getDaysInYear(0, basis) / frequency);
}

/**
 * Returns the number of days from the settlement date to the next coupon date
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  	 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 * @return {number}
 */
export function coupdaysnc(
	settlement,
	maturity,
	frequency,
	basis = 0,
) {
	argsValidator('coupdaysnc', settlement, maturity, frequency, basis);
	let ncd = coupncd(settlement, maturity, frequency, basis);
	return daysBetween(settlement, ncd, basis);
}

/**
 * Returns the next coupon date after the settlement date
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 * 															0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 */
export function coupncd(settlement, maturity, frequency, basis = 0) {
	argsValidator('coupncd', settlement, maturity, frequency, basis);
	// eslint-disable-next-line no-unused-vars
	let [y1, m1, d1] = splitDate(maturity);
	let d = new Date(settlement.getUTCFullYear(), m1 - 1, d1);
	if (+settlement < +d) {
		d = addDate(d, -1, 0, 0);
	}
	while (+settlement >= +d) {
		d = addDate(d, 0, 12 / frequency, 0);
	}
	let month = d.getUTCMonth();
	d.setUTCDate(Math.max(d.getUTCDate(), +d1));
	if (month !== d.getUTCMonth()) {
		d.setUTCDate(0);
	}
	return d;
}

/**
 * Returns the number of coupons payable between the settlement date and maturity date
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
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 */
export function coupnum(settlement, maturity, frequency, basis = 0) {
	argsValidator('coupnum', settlement, maturity, frequency, basis);
	let pcd = couppcd(settlement, maturity, frequency, basis);
	let [y, m] = splitDate(pcd);
	let [y1, m1] = splitDate(maturity);
	let months = (y1 - y) * 12 + (m1 - m);
	return (months * frequency) / 12;
}

/**
 * Returns the previous coupon date before the settlement date
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
 * @throws TypeError if required arguments are missing
 * @throws TypeError if settlement or maturity cannot be converted to Date
 * @throws RangeError if frequency is not in range of [1, 2, 4]
 * @throws RangeError if basis is not in range of [0, 1, 2, 3, 4]
 * @throws RangeError if settlement >= maturity
 */
export function couppcd(settlement, maturity, frequency, basis = 0) {
	argsValidator('couppcd', settlement, maturity, frequency, basis);
	let d = maturity;
	while (+settlement < +d) {
		d = addDate(d, 0, -12 / frequency, 0);
	}
	return d;
}
