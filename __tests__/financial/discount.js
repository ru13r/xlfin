'use strict';
import f from '@';

describe('DISC', () => {
	it('is a function', () => {
		expect(f.DISC).toBeInstanceOf(Function);
	});
});

describe('INTRATE', () => {
	it('is a function', () => {
		expect(f.INTRATE).toBeInstanceOf(Function);
	});
});

describe('PRICEDISC', () => {
	it('is a function', () => {
		expect(f.PRICEDISC).toBeInstanceOf(Function);
	});
});

describe('RECEIVED', () => {
	it('is a function', () => {
		expect(f.RECEIVED).toBeInstanceOf(Function);
	});
});

describe('YIELDDISC', () => {
	it('is a function', () => {
		expect(f.YIELDDISC).toBeInstanceOf(Function);
	});
});
