'use strict';
import fns from '@';
import {
	coupdaybs,
	coupdays,
	coupdaysnc,
	coupncd,
	coupnum,
	couppcd,
} from '../../src/lib/coupon';
import { splitDate } from '../../src/_internal/dates';

// test helper
const applyTests = (suiteName, ...tests) => f => {
	describe(suiteName, () => tests.forEach(test => test(f)));
};

// common test args
const settlement = new Date('2012-01-25');
const maturity = new Date('2012-06-11');
const invalidDate = '2017-07-25'; // String instead of Date object

// Tests
const exportedInDefault = module => f => {
	it('is exported in default object', () => {
		expect(module[f.name]).toBeInstanceOf(Function);
	});
};

const exportedByName = f => {
	it('is exported by name', () => {
		expect(f).toBeInstanceOf(Function);
	});
};

const missingArgsTest = f => {
	it('throws if required arguments are missing', () => {
		expect(() => f()).toThrow();
		expect(() => f(settlement)).toThrow();
		expect(() => f(settlement, maturity)).toThrow();
	});
};

const invalidDateTest = f => {
	it('throws TypeError if settlement or maturity cannot be converted to a valid date', () => {
		expect(() => f(invalidDate, maturity, 1)).toThrow(TypeError);
		expect(() => f(settlement, invalidDate, 1)).toThrow(TypeError);
		// falsy value is not accepted as Date-like
		expect(() => f(settlement, 0, 1)).toThrow(TypeError);
		expect(() => f(0, maturity, 1)).toThrow(TypeError);
	});
};

const frequencyTest = f => {
	it('throws RangeError if frequency is outside of the [1,2,4] range', () => {
		expect(() => f(settlement, maturity, 3)).toThrow();
		expect(() => f(settlement, maturity, '1')).toThrow();
	});
};

const basisTest = f => {
	it('throws RangeError if basis is outside of [0,..., 4] range', () => {
		expect(() => f(settlement, maturity, 1, 5)).toThrow();
		expect(() => f(settlement, maturity, 1, '1')).toThrow();
	});
};

const datePrecedenceTest = f => {
	it('throws RangeError if required dates order is incorrect', () => {
		expect(() => f(maturity, settlement, 1)).toThrow();
		expect(() => f(settlement, settlement, 1)).toThrow();
	});
};

const applyGenericTests = applyTests(
	'Generic Tests',
	exportedInDefault(fns),
	exportedByName,
	missingArgsTest,
	invalidDateTest,
	frequencyTest,
	basisTest,
	datePrecedenceTest,
);

// cartesian product of two arrays
const cartesian = (a, b) =>
	[].concat(...a.map(a => b.map(b => [].concat(a, b))));
// zip of two arrays of equal length
const zip = (a, b) => a.map((a, i) => a.concat(b[i]));
const shortDate = d => splitDate(d).join('-');

const returnsCorrectValue = suite => f => {
	const { settlement, maturity } = suite;
	// frequency / basis arrays
	const bfs = cartesian([1, 2, 4], [0, 1, 2, 3, 4]);
	const table = zip(bfs, suite.results);
	describe(`${suite.name} 
	(S=${shortDate(settlement)},
	 M=${shortDate(maturity)})`, () =>
		it.each(table)('freq=%i, basis=%i', (freq, basis, expected) =>
			expect(f(settlement, maturity, freq, basis)).toStrictEqual(
				expected,
			),
		));
};

// common test arguments
const args = [];

args.push({
	name: 'Generic dates',
	settlement: new Date('2012-01-25'),
	maturity: new Date('2012-06-12'),
});

args.push({
	name: 'PCD is Feb 29',
	settlement: new Date('2012-03-25'),
	maturity: new Date('2012-08-30'),
});

args.push({
	name: 'PCD is Feb 29, EOM maturity',
	settlement: new Date('2012-03-25'),
	maturity: new Date('2013-08-31'),
});

args.push({
	name: 'EOM is Feb 29',
	settlement: new Date('2011-01-25'),
	maturity: new Date('2012-02-29'),
});

describe('coupdaybs', () => {
	const func = fns.coupdaybs;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				223, 227, 227, 227, 223,
				43, 44, 44, 44, 43,
				43, 44, 44, 44, 43,
			]
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				205, 208, 208, 208, 205,
				25, 25, 25, 25, 26,
				25, 25, 25, 25, 26,
			]
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				205, 207, 207, 207, 205,
				25, 25, 25, 25, 26,
				25, 25, 25, 25, 26,
			]
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				325, 331, 331, 331, 327,
				145, 147, 147, 147, 145,
				55, 56, 56, 56, 55,
			]
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});

describe('coupdays', () => {
	const func = fns.coupdays;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				360, 366, 360, 365, 360,
				180, 183, 180, 183, 180,
				90, 91, 90, 91, 90,
			]
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				360, 366, 360, 365, 360,
				180, 183, 180, 183, 180,
				90, 91, 90, 91, 90,
			]
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				360, 366, 360, 365, 360,
				180, 182, 180, 183, 180,
				90, 90, 90, 91, 90,
			]
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				360, 365, 360, 365, 360,
				180, 181, 180, 183, 180,
				90, 90, 90, 91, 90,
			]
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});

describe('coupdaysnc', () => {
	const func = fns.coupdaysnc;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				137, 139, 139, 139, 137,
				137, 139, 139, 139, 137,
				47, 47, 47, 47, 47,
			]
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				155, 158, 158, 158, 155,
				155, 158, 158, 158, 155,
				65, 66, 66, 66, 65,
			]
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				155, 159, 159, 159, 155,
				155, 159, 159, 159, 155,
				65, 67, 67, 67, 65,
			]
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				35, 34, 34, 34, 33,
				35, 34, 34, 34, 33,
				35, 34, 34, 34, 33,
			]
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});

describe('coupncd', () => {
	const func = fns.coupncd;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				'2012-06-12', '2012-06-12', '2012-06-12', '2012-06-12', '2012-06-12',
				'2012-06-12', '2012-06-12', '2012-06-12', '2012-06-12', '2012-06-12',
				'2012-03-12', '2012-03-12', '2012-03-12', '2012-03-12', '2012-03-12',
			].map(x => new Date(x))
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				'2012-08-30', '2012-08-30', '2012-08-30', '2012-08-30', '2012-08-30',
				'2012-08-30', '2012-08-30', '2012-08-30', '2012-08-30', '2012-08-30',
				'2012-05-30', '2012-05-30', '2012-05-30', '2012-05-30', '2012-05-30',
			].map(x => new Date(x))
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				'2012-08-31', '2012-08-31', '2012-08-31', '2012-08-31', '2012-08-31',
				'2012-08-31', '2012-08-31', '2012-08-31', '2012-08-31', '2012-08-31',
				'2012-05-31', '2012-05-31', '2012-05-31', '2012-05-31', '2012-05-31',
			].map(x => new Date(x))
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				'2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28',
				'2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28',
				'2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28', '2011-02-28',
			].map(x => new Date(x))
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});

describe('coupnum', () => {
	const func = fns.coupnum;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				1, 1, 1, 1, 1,
				1, 1, 1, 1, 1,
				2, 2, 2, 2, 2
			]
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				1, 1, 1, 1, 1,
				1, 1, 1, 1, 1,
				2, 2, 2, 2, 2
			]
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				2, 2, 2, 2, 2,
				3, 3, 3, 3, 3,
				6, 6, 6, 6, 6
			]
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				2, 2, 2, 2, 2,
				3, 3, 3, 3, 3,
				5, 5, 5, 5, 5
			]
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});

describe('couppcd', () => {
	const func = fns.couppcd;
	applyGenericTests(func);
	const suites = [];
	suites.push({
		...args[0],
		// prettier-ignore
		results:
			[
				'2011-06-12', '2011-06-12', '2011-06-12', '2011-06-12', '2011-06-12',
				'2011-12-12', '2011-12-12', '2011-12-12', '2011-12-12', '2011-12-12',
				'2011-12-12', '2011-12-12', '2011-12-12', '2011-12-12', '2011-12-12',
			].map(x => new Date(x))
	});

	suites.push({
		...args[1],
		// prettier-ignore
		results:
			[
				'2011-08-30', '2011-08-30', '2011-08-30', '2011-08-30', '2011-08-30',
				'2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29',
				'2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29',
			].map(x => new Date(x))
	});
	suites.push({
		...args[2],
		// prettier-ignore
		results:
			[
				'2011-08-31', '2011-08-31', '2011-08-31', '2011-08-31', '2011-08-31',
				'2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29',
				'2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29', '2012-02-29',
			].map(x => new Date(x))
	});
	suites.push({
		...args[3],
		// prettier-ignore
		results:
			[
				'2010-02-28', '2010-02-28', '2010-02-28', '2010-02-28', '2010-02-28',
				'2010-08-31', '2010-08-31', '2010-08-31', '2010-08-31', '2010-08-31',
				'2010-11-30', '2010-11-30', '2010-11-30', '2010-11-30', '2010-11-30',
			].map(x => new Date(x))
	});
	applyTests(
		'Return Tests',
		...suites.map(s => returnsCorrectValue(s)),
	)(func);
});
