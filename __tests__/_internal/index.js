import { hasRequiredArgs, isNonEmptyArray } from '@/_internal';

describe('hasRequiredArgs', () => {
	it('returns a correct value', () => {
		expect(hasRequiredArgs()).toBe(true);
		expect(hasRequiredArgs(1)).toBe(true);
		expect(hasRequiredArgs(undefined)).toBe(false);
		expect(hasRequiredArgs(null)).toBe(false);
		expect(hasRequiredArgs(1, undefined, 2)).toBe(false);
		expect(hasRequiredArgs(1, null, 2)).toBe(false);
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
