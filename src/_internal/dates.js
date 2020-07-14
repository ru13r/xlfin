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
 * @param {Date} d date
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
	// Discards the time
	const utc1 = getUTCZeroTimeMsecs(a);
	const utc2 = getUTCZeroTimeMsecs(b);
	if (!basis30(basis)) {
		return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
	} else {
		let [y1, m1, d1] = splitDate(new Date(utc1));
		let [y2, m2, d2] = splitDate(new Date(utc2));
		if (basis === 0) {
			// US (NASD) 30/360
			if (isLastDayFeb(y1, m1, d1) && isLastDayFeb(y2, m2, d2)) {
				d2 = 30;
			}
			if (isLastDayFeb(y1, m1, d1)) {
				d1 = 30;
			}
			if (d1 >= 30 && d2 === 31) {
				d2 = 30;
			}
			if (d1 === 31) {
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
 * Month is returned in range from 1 to 12
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
 * @return {number}
 */
export const addDate = (date, y, m, d) => {
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
	// if the date was end of month (e. g. 29 Feb)
	// the result shall be end of month also (including months with more days than original)
	nd.setUTCDate(nd.getUTCDate() + d);
	return nd;
};
