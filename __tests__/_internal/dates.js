import {
	addDate,
	basis30,
	begOfMonth,
	daysBetween,
	endOfMonth,
	isEOM,
	getDaysInYear,
	isLeapYear,
	isLastDayFeb,
} from '@/_internal/dates';

describe('addDate', () => {
	it('returns a correct value', () => {
		const d = new Date('2017-01-01');
		expect(addDate(d, 1, 0, 0)).toStrictEqual(new Date('2018-01-01'));
		expect(addDate(d, -1, 0, 0)).toStrictEqual(new Date('2016-01-01'));
		expect(addDate(d, 0, 1, 0)).toStrictEqual(new Date('2017-02-01'));
		expect(addDate(d, 0, -1, 0)).toStrictEqual(new Date('2016-12-01'));
		expect(addDate(d, 0, 0, 1)).toStrictEqual(new Date('2017-01-02'));
		expect(addDate(d, 0, 0, -1)).toStrictEqual(new Date('2016-12-31'));
		expect(addDate(d, 0, 0, 31)).toStrictEqual(new Date('2017-02-01'));
		// months test with variable number of days
		expect(addDate(new Date(2016, 1, 29), 0, 12, 0)).toStrictEqual(
			new Date('2017-02-28'),
		);
		expect(addDate(new Date(2016, 1, 29), -1, 0, 0)).toStrictEqual(
			new Date('2015-02-28'),
		);
		// expect(addDate(new Date(2016, 1, 29), 0, 6, 0)).toStrictEqual(
		// 	new Date('2016-08-30'),
		// );
		// expect(addDate(new Date(2016, 1, 29), -1, 5, 0)).toStrictEqual(
		// 	new Date('2015-07-31'),
		// );
		expect(addDate(new Date(2017, 0, 1), 0, -1, 0)).toStrictEqual(
			new Date('2016-12-01'),
		);
		expect(addDate(new Date(2012, 1, 29), -1, 0, 0)).toStrictEqual(
			new Date('2011-02-28'),
		);
		expect(addDate(new Date(2017, 0, 31), 0, -2, 0)).toStrictEqual(
			new Date('2016-11-30'),
		);
		expect(addDate(new Date(2012, 1, 29), 0, 1, 0)).toStrictEqual(
			new Date('2012-03-29'),
		);
		expect(addDate(new Date(2012, 1, 29), 0, 1, 0, true)).toStrictEqual(
			new Date('2012-03-31'),
		);
		expect(addDate(new Date(2012, 1, 29), 0, -1, 0)).toStrictEqual(
			new Date('2012-01-29'),
		);
		expect(addDate(new Date(2012, 1, 29), 0, -1, 0, true)).toStrictEqual(
			new Date('2012-01-31'),
		);
		expect(addDate(new Date(2016, 11, 31), 0, 2, 0)).toStrictEqual(
			new Date('2017-02-28'),
		);
	});
});

describe('basis30', () => {
	it('returns a correct value', () => {
		expect(basis30(0)).toBe(true);
		expect(basis30(1)).toBe(false);
		expect(basis30(2)).toBe(false);
		expect(basis30(3)).toBe(false);
		expect(basis30(4)).toBe(true);
	});
});

describe('begOfMonth', () => {
	it('returns a correct value', () => {
		expect(begOfMonth(new Date('2017-01-01'))).toStrictEqual(
			new Date('2017-01-01'),
		);
		expect(begOfMonth(new Date('2017-01-31'))).toStrictEqual(
			new Date('2017-01-01'),
		);
		expect(begOfMonth(new Date('2017-02-25'))).toStrictEqual(
			new Date('2017-02-01'),
		);
	});
});

describe('daysBetween', () => {
	it('returns a correct value', () => {
		let a = new Date('2017-01-01');
		let b = new Date('2017-07-25');
		expect(daysBetween(a, b)).toBe(205);
		expect(daysBetween(b, a)).toBe(-205);
		// tests for basis 30/360
		a = new Date('2012-02-29');
		b = new Date('2012-03-25');
		expect(daysBetween(a, b)).toBe(25);
		expect(daysBetween(a, b, 0)).toBe(25);
		expect(daysBetween(a, b, 2)).toBe(25);
		expect(daysBetween(a, b, 3)).toBe(25);
		expect(daysBetween(a, b, 4)).toBe(26);
		b = new Date('2013-02-28');
		expect(daysBetween(a, b)).toBe(365);
		expect(daysBetween(a, b, 0)).toBe(360); //TODO correct? what is the difference between this one and days360?
		expect(daysBetween(a, b, 2)).toBe(365);
		expect(daysBetween(a, b, 3)).toBe(365);
		expect(daysBetween(a, b, 4)).toBe(359);
	});
});

describe('endOfMonth', () => {
	it('returns a correct value', () => {
		expect(endOfMonth(new Date('2017-01-01'))).toStrictEqual(
			new Date('2017-01-31'),
		);
		expect(endOfMonth(new Date('2017-01-31'))).toStrictEqual(
			new Date('2017-01-31'),
		);
		expect(endOfMonth(new Date('2017-02-25'))).toStrictEqual(
			new Date('2017-02-28'),
		);
		expect(endOfMonth(new Date('1996-02-25'))).toStrictEqual(
			new Date('1996-02-29'),
		);
		expect(endOfMonth(new Date('2016-02-29'))).toStrictEqual(
			new Date('2016-02-29'),
		);
	});
});

describe('isEOM', () => {
	it('returns a correct value', () => {
		const f = isEOM;
		expect(f(new Date('2012-02-29'))).toBe(true);
		expect(f(new Date('2012-02-28'))).toBe(false);
		expect(f(new Date('2012-01-29'))).toBe(false);
		expect(f(new Date('2012-01-31'))).toBe(true);
	});
});

describe('getDaysInYear', () => {
	it('returns a correct value', () => {
		const f = getDaysInYear;
		expect(f(2000)).toBe(366);
		expect(f(2012)).toBe(366);
		expect(f(1997)).toBe(365);
		expect(f(1900)).toBe(365);
		expect(f(2000, 0)).toBe(360);
		expect(f(2012, 0)).toBe(360);
		expect(f(1997, 0)).toBe(360);
		expect(f(1900, 0)).toBe(360);
		expect(f(2000, 1)).toBe(366);
		expect(f(2012, 1)).toBe(366);
		expect(f(1997, 1)).toBe(365);
		expect(f(1900, 1)).toBe(365);
		expect(f(2000, 2)).toBe(360);
		expect(f(2012, 2)).toBe(360);
		expect(f(1997, 2)).toBe(360);
		expect(f(1900, 2)).toBe(360);
		expect(f(2000, 3)).toBe(365);
		expect(f(2012, 3)).toBe(365);
		expect(f(1997, 3)).toBe(365);
		expect(f(1900, 3)).toBe(365);
		expect(f(2000, 4)).toBe(360);
		expect(f(2012, 4)).toBe(360);
		expect(f(1997, 4)).toBe(360);
		expect(f(1900, 4)).toBe(360);
	});
});

describe('isLeapYear', () => {
	it('returns a correct value', () => {
		expect(isLeapYear(2000)).toBe(true);
		expect(isLeapYear(2012)).toBe(true);
		expect(isLeapYear(1997)).toBe(false);
		expect(isLeapYear(1900)).toBe(false);
	});
});

describe('isLastDayFeb', () => {
	it('returns a correct value', () => {
		expect(isLastDayFeb(2000, 2, 28)).toBe(false);
		expect(isLastDayFeb(2000, 2, 29)).toBe(true);
		expect(isLastDayFeb(2012, 2, 29)).toBe(true);
		expect(isLastDayFeb(2012, 2, 28)).toBe(false);
		expect(isLastDayFeb(1997, 2, 28)).toBe(true);
		expect(isLastDayFeb(1997, 3, 31)).toBe(false);
		expect(isLastDayFeb(1900, 2, 29)).toBe(false);
	});
});
