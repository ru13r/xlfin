'use strict';
import f from '@';
import {
	amordegrc,
	amorlinc,
	db,
	ddb,
	sln,
	syd,
	vdb,
} from '../../src/lib/depreciation';

const cost = 30000;
const salvage = 7500;
const life = 10;

describe('amordegrc', () => {
	it('is a function', () => {
		expect(f.amordegrc).toBeInstanceOf(Function);
		expect(amordegrc).toBeInstanceOf(Function);
	});
});

describe('amorlinc', () => {
	it('is a function', () => {
		expect(f.amorlinc).toBeInstanceOf(Function);
		expect(amorlinc).toBeInstanceOf(Function);
	});
});

describe('db', () => {
	it('is a function', () => {
		expect(f.db).toBeInstanceOf(Function);
		expect(db).toBeInstanceOf(Function);
	});
});

describe('ddb', () => {
	it('is a function', () => {
		expect(f.ddb).toBeInstanceOf(Function);
		expect(ddb).toBeInstanceOf(Function);
	});
});

describe('sln', () => {
	it('is a function', () => {
		expect(f.sln).toBeInstanceOf(Function);
		expect(sln).toBeInstanceOf(Function);
	});
	it('correctly calculates', () => {
		// TODO declare similar test params values only once for all functions in a test suite
		expect(f.sln(cost, salvage, life)).toBeCloseTo(2250);
	});
});

describe('syd', () => {
	it('is a function', () => {
		expect(f.syd).toBeInstanceOf(Function);
		expect(syd).toBeInstanceOf(Function);
	});
	it('correctly calculates', () => {
		// TODO declare similar test params values only once for all functions in a test suite
		expect(f.syd(cost, salvage, life, 1)).toBeCloseTo(4090.91);
		expect(f.syd(cost, salvage, life, 10)).toBeCloseTo(409.09);
	});
});

describe('vdb', () => {
	it('is a function', () => {
		expect(f.vdb).toBeInstanceOf(Function);
		expect(vdb).toBeInstanceOf(Function);
	});
});
