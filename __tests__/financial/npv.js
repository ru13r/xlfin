'use strict';
import f from '@';

//TODO NPV(IRR(x),x) toBeCloseTo(0)
//TODO XNPV(XIRR) toBeCloseTo(0)

describe('IRR', () => {
	it('is a function', () => {
		expect(f.IRR).toBeInstanceOf(Function);
	});
});

describe('NPV', () => {
	it('is a function', () => {
		expect(f.NPV).toBeInstanceOf(Function);
	});
});

describe('MIRR', () => {
	it('is a function', () => {
		expect(f.MIRR).toBeInstanceOf(Function);
	});
});

describe('XIRR', () => {
	it('is a function', () => {
		expect(f.XIRR).toBeInstanceOf(Function);
	});
});

describe('XNPV', () => {
	it('is a function', () => {
		expect(f.XNPV).toBeInstanceOf(Function);
	});
});
