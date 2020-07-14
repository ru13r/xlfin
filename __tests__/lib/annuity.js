'use strict';
import f from '@';
import {
	cumipmt,
	cumprinc,
	fv,
	pv,
	pmt,
	ppmt,
	ipmt,
	rate,
	nper,
	ispmt,
} from '@';

describe('cumipmt', () => {
	it('is a function', () => {
		expect(f.cumipmt).toBeInstanceOf(Function);
		expect(cumipmt).toBeInstanceOf(Function);
	});
});

describe('cumprinc', () => {
	it('is a function', () => {
		expect(f.cumprinc).toBeInstanceOf(Function);
		expect(cumprinc).toBeInstanceOf(Function);
	});
});

describe('fv', () => {
	it('is a function', () => {
		expect(f.fv).toBeInstanceOf(Function);
		expect(fv).toBeInstanceOf(Function);
	});
});

describe('ipmt', () => {
	it('is a function', () => {
		expect(f.ipmt).toBeInstanceOf(Function);
		expect(ipmt).toBeInstanceOf(Function);
	});
});

describe('ispmt', () => {
	it('is a function', () => {
		expect(f.ispmt).toBeInstanceOf(Function);
		expect(ispmt).toBeInstanceOf(Function);
	});
});

describe('nper', () => {
	it('is a function', () => {
		expect(f.nper).toBeInstanceOf(Function);
		expect(nper).toBeInstanceOf(Function);
	});
});

describe('pmt', () => {
	it('is a function', () => {
		expect(f.pmt).toBeInstanceOf(Function);
		expect(pmt).toBeInstanceOf(Function);
	});
});

describe('ppmt', () => {
	it('is a function', () => {
		expect(f.ppmt).toBeInstanceOf(Function);
		expect(ppmt).toBeInstanceOf(Function);
	});
});

describe('pv', () => {
	it('is a function', () => {
		expect(f.pv).toBeInstanceOf(Function);
		expect(pv).toBeInstanceOf(Function);
	});
});

describe('rate', () => {
	it('is a function', () => {
		expect(f.rate).toBeInstanceOf(Function);
		expect(rate).toBeInstanceOf(Function);
	});
});
