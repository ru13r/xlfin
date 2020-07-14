'use strict';
import f from '@';
import { irr, npv, mirr, xirr, xnpv } from '@';

//TODO npv(irr(x),x) toBeCloseTo(0)
//TODO xnpv(xirr) toBeCloseTo(0)

describe('irr', () => {
	it('is a function', () => {
		expect(f.irr).toBeInstanceOf(Function);
		expect(irr).toBeInstanceOf(Function);
	});
});

describe('npv', () => {
	it('is a function', () => {
		expect(f.npv).toBeInstanceOf(Function);
		expect(npv).toBeInstanceOf(Function);
	});
});

describe('mirr', () => {
	it('is a function', () => {
		expect(f.mirr).toBeInstanceOf(Function);
		expect(mirr).toBeInstanceOf(Function);
	});
});

describe('xirr', () => {
	it('is a function', () => {
		expect(f.xirr).toBeInstanceOf(Function);
		expect(xirr).toBeInstanceOf(Function);
	});
});

describe('xnpv', () => {
	it('is a function', () => {
		expect(f.xnpv).toBeInstanceOf(Function);
		expect(xnpv).toBeInstanceOf(Function);
	});
});
