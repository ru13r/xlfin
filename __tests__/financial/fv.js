'use strict';
import f from '@';

describe('FVSCHEDULE', () => {
	it('is a function', () => {
		expect(f.FVSCHEDULE).toBeInstanceOf(Function);
	});
	it('calculates a future value', () => {
		expect(f.FVSCHEDULE(100, [0.03])).toBeCloseTo(103);
		expect(f.FVSCHEDULE(100, [0.03, 0])).toBeCloseTo(103);
		expect(f.FVSCHEDULE(100, [0.03, 0.03])).toBeCloseTo(
			100 * (1 + 0.03) * (1 + 0.03),
		);
	});
});

describe('PDURATION', () => {
	it('is a function', () => {
		expect(f.PDURATION).toBeInstanceOf(Function);
	});
});

describe('RRI', () => {
	it('is a function', () => {
		expect(f.RRI).toBeInstanceOf(Function);
	});
});
