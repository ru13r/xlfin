'use strict';
// Date helper functions

/*
 * Discards time and returns UTC milliseconds
 * @param {Date} d
 * @return {number} date
 */
const getUTCZeroTimeMsecs = d =>
	Date.UTC(d.getFullYear(), d.getMonth(), d.getDate());

/**
 * Tests if the date is the last day of february
 *
 * @param {Number} y year
 * @param {Number} m month (from 1 to 12!!)
 * @param {Number} d date
 * @return {boolean}
 */
export const isLastDayFeb = (y, m, d) => {
	// months in JS date are from 0 to 11
	return m === 2 && (isLeapYear(y) ? d === 29 : d === 28);
};

/*
 * Function daysBetween
 * Returns the number of days between two dates
 * Time and timezone are not taken into account
 *
 * @param {Date} a
 * @param {Date} b
 * @param {number} basis of [0,..4]
 * @return {number}
 */
export const daysBetween = (a, b, basis = 1) => {
	if (!basis30(basis)) {
		// Discards the time
		const utc1 = getUTCZeroTimeMsecs(a);
		const utc2 = getUTCZeroTimeMsecs(b);
		return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	} else {
		let [y1, m1, d1] = splitDate(a);
		let [y2, m2, d2] = splitDate(b);
		if (basis === 0) {
			// US (NASD) 30/360
			// https://docs.microsoft.com/en-us/openspecs/office_standards/ms-oi29500/03a8b66d-ce9d-43d8-a751-17c0b018f0c3
			if (d1 === 31 && d2 === 31) {
				d1 = 30;
				d2 = 30;
			} else if (d1 === 31) {
				d1 = 30;
			} else if (d1 === 30 && d2 === 31) {
				// d1 remains unchanged
				d2 = 30;
			} else if (isLastDayFeb(y1, m1, d1) && isLastDayFeb(y2, m2, d2)) {
				d1 = 30;
				d2 = 30;
			} else if (isLastDayFeb(y1, m1, d1)) {
				d1 = 30;
			}
		}
		if (basis === 4) {
			// European 30/360
			d1 = d1 === 31 ? 30 : d1;
			d2 = d2 === 31 ? 30 : d2;
		}
		return 360 * (y2 - y1) + 30 * (m2 - m1) + (d2 - d1);
	}
};

/**
 *
 * @param {number} basis
 * @return {boolean} true if basis has 30 days in months (0 or 4)
 */
export const basis30 = basis => basis === 0 || basis === 4;

/**
 * Returns end of the month date, given a Date
 * @param {Date} d
 * @return {Date}
 */
export const endOfMonth = d => {
	let nd = new Date(getUTCZeroTimeMsecs(d));
	nd.setUTCDate(1); // set the first day of a month, otherwise it will overflow on e. g. 31st January
	nd.setUTCMonth(nd.getUTCMonth() + 1);
	nd.setUTCDate(0);
	return nd;
};

/**
 * Checks if date is end of month date
 * @param {Date} d
 * @return {boolean}
 */
export const isEOM = d => daysBetween(d, endOfMonth(d)) === 0;

/**
 * Returns beginning of the month Date, given a Date
 * @param {Date} d
 * @return {Date}
 */
export const begOfMonth = d => {
	let nd = new Date(getUTCZeroTimeMsecs(d));
	nd.setUTCDate(1);
	return nd;
};

//tests if year is a leap year
export const isLeapYear = y => !(y % 4 || (!(y % 100) && y % 400));

/**
 * Gets days in year, given a basis
 *  0 - US (NASD) 30/360 (used by default)
 * 	1 - Actual/actual (default)
 *	2 - Actual/360
 * 	3 - Actual/365
 *	4 - European 30/360
 * @param {number} y
 * @param {number} basis
 * @return {number}
 */
export const getDaysInYear = (y, basis = 1) => {
	let result;
	if (basis === 1) result = exports.isLeapYear(y) ? 366 : 365;
	else if (basis === 3) result = 365;
	else result = 360;
	return result;
};

/**
 * Splits the date object into array of [year, month, day].
 * Month is numbered from 1 to 12
 * @param {Date} date
 * @return {(number)[]} [year, month, day]
 */
export const splitDate = date => {
	let d = new Date(getUTCZeroTimeMsecs(date));
	return [d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate()];
};

/**
 *
 * @param {Date} date
 * @param {number} y years
 * @param {number} m months
 * @param {number} d days
 * @param {boolean} isEOM (optional) respect end of month e.g 29 Feb + 1 month = 31 March
 * @return {Date}
 */
export const addDate = (date, y, m, d, isEOM = false) => {
	let nd = new Date(getUTCZeroTimeMsecs(date));
	let [year, month, day] = splitDate(nd);
	// Date object months start with 0
	month = month - 1;
	nd.setUTCFullYear(year + y);
	if (nd.getUTCDate() !== day) {
		nd.setUTCDate(0);
	}
	nd.setUTCMonth(month + m, 1);
	month = nd.getUTCMonth();
	nd.setUTCDate(day);
	// correct overflow if added months from e. g. Dec (31 days) to Nov (30 days)
	if (nd.getUTCMonth() !== month) {
		nd.setUTCDate(0);
	}
	nd.setUTCDate(nd.getUTCDate() + d);
	// if isEOM then if the date was end of month (e. g. 29 Feb)
	// the result shall be end of month also (including months with more days than original)
	return !isEOM ? nd : endOfMonth(nd);
};
