import { diffInDays, isNonEmptyArray } from '@/common';

describe('diffDays', () => {
	it('calculates correctly', () => {
		const a = new Date('2017-01-01');
		const b = new Date('2017-07-25');
		expect(diffInDays(a, b)).toBe(205);
	});
});

describe('isNonEmptyArray', () => {
	it('tests correctly', () => {
		expect(isNonEmptyArray(null)).toBe(false);
		expect(isNonEmptyArray(34)).toBe(false);
		expect(isNonEmptyArray({})).toBe(false);
		expect(isNonEmptyArray([])).toBe(false);
		expect(isNonEmptyArray([34])).toBe(true);
		expect(isNonEmptyArray([36, 34])).toBe(true);
	});
});
