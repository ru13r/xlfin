'use strict';
import f from '@';
import {
	effect,
	nominal,
	dollarde,
	dollarfr,
} from '../../src/lib/conversions';

describe('effect', () => {
	it('is a function', () => {
		expect(f.effect).toBeInstanceOf(Function);
		expect(effect).toBeInstanceOf(Function);
	});
});

describe('nominal', () => {
	it('is a function', () => {
		expect(f.nominal).toBeInstanceOf(Function);
		expect(nominal).toBeInstanceOf(Function);
	});
});

describe('dollarde', () => {
	it('is a function', () => {
		expect(f.dollarde).toBeInstanceOf(Function);
		expect(dollarde).toBeInstanceOf(Function);
	});
});

describe('dollarfr', () => {
	it('is a function', () => {
		expect(f.dollarfr).toBeInstanceOf(Function);
		expect(dollarfr).toBeInstanceOf(Function);
	});
});
