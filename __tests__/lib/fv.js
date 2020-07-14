'use strict';
import f from '@';
import { fvschedule, pduration, rri } from '@';

describe('fvschedule', () => {
	it('is a function', () => {
		expect(f.fvschedule).toBeInstanceOf(Function);
		expect(fvschedule).toBeInstanceOf(Function);
	});
	it('calculates a future value', () => {
		expect(f.fvschedule(100, [0.03])).toBeCloseTo(103);
		expect(f.fvschedule(100, [0.03, 0])).toBeCloseTo(103);
		expect(f.fvschedule(100, [0.03, 0.03])).toBeCloseTo(
			100 * (1 + 0.03) * (1 + 0.03),
		);
	});
});

describe('pduration', () => {
	it('is a function', () => {
		expect(f.pduration).toBeInstanceOf(Function);
		expect(pduration).toBeInstanceOf(Function);
	});
});

describe('rri', () => {
	it('is a function', () => {
		expect(f.rri).toBeInstanceOf(Function);
		expect(rri).toBeInstanceOf(Function);
	});
});
