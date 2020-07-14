'use strict';
import f from '@';
import { disc, intrate, pricedisc, received, yielddisc } from '@';

describe('disc', () => {
	it('is a function', () => {
		expect(f.disc).toBeInstanceOf(Function);
		expect(disc).toBeInstanceOf(Function);
	});
});

describe('intrate', () => {
	it('is a function', () => {
		expect(f.intrate).toBeInstanceOf(Function);
		expect(intrate).toBeInstanceOf(Function);
	});
});

describe('pricedisc', () => {
	it('is a function', () => {
		expect(f.pricedisc).toBeInstanceOf(Function);
		expect(pricedisc).toBeInstanceOf(Function);
	});
});

describe('received', () => {
	it('is a function', () => {
		expect(f.received).toBeInstanceOf(Function);
		expect(received).toBeInstanceOf(Function);
	});
});

describe('yielddisc', () => {
	it('is a function', () => {
		expect(f.yielddisc).toBeInstanceOf(Function);
		expect(yielddisc).toBeInstanceOf(Function);
	});
});
