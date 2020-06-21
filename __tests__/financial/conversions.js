'use strict';
import f from '@';

describe('EFFECT', () => {
	it('is a function', () => {
		expect(f.EFFECT).toBeInstanceOf(Function);
	});
});

describe('NOMINAL', () => {
	it('is a function', () => {
		expect(f.NOMINAL).toBeInstanceOf(Function);
	});
});

describe('DOLLARDE', () => {
	it('is a function', () => {
		expect(f.DOLLARDE).toBeInstanceOf(Function);
	});
});

describe('DOLLARFR', () => {
	it('is a function', () => {
		expect(f.DOLLARFR).toBeInstanceOf(Function);
	});
});
