'use strict';
import f from '@';

const cost = 30000;
const salvage = 7500;
const life = 10;

describe('AMORDEGRC', () => {
	it('is a function', () => {
		expect(f.AMORDEGRC).toBeInstanceOf(Function);
	});
});

describe('AMORLINC', () => {
	it('is a function', () => {
		expect(f.AMORLINC).toBeInstanceOf(Function);
	});
});

describe('DB', () => {
	it('is a function', () => {
		expect(f.DB).toBeInstanceOf(Function);
	});
});

describe('DDB', () => {
	it('is a function', () => {
		expect(f.DDB).toBeInstanceOf(Function);
	});
});

describe('SLN', () => {
	it('is a function', () => {
		expect(f.SLN).toBeInstanceOf(Function);
	});
	it('correctly calculates', () => {
		// TODO declare similar test params values only once for all functions in a test suite
		expect(f.SLN(cost, salvage, life)).toBeCloseTo(2250);
	});
});

describe('SYD', () => {
	it('is a function', () => {
		expect(f.SYD).toBeInstanceOf(Function);
	});
	it('correctly calculates', () => {
		// TODO declare similar test params values only once for all functions in a test suite
		expect(f.SYD(cost, salvage, life, 1)).toBeCloseTo(4090.91);
		expect(f.SYD(cost, salvage, life, 10)).toBeCloseTo(409.09);
	});
});

describe('VDB', () => {
	it('is a function', () => {
		expect(f.VDB).toBeInstanceOf(Function);
	});
});
