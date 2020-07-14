'use strict';
import f from '@';
import { tbilleq, tbillprice, tbillyield } from '@';

describe('tbilleq', () => {
	it('is a function', () => {
		expect(f.tbilleq).toBeInstanceOf(Function);
		expect(tbilleq).toBeInstanceOf(Function);
	});
});

describe('tbillprice', () => {
	it('is a function', () => {
		expect(f.tbillprice).toBeInstanceOf(Function);
		expect(tbillprice).toBeInstanceOf(Function);
	});
});

describe('tbillyield', () => {
	it('is a function', () => {
		expect(f.tbillyield).toBeInstanceOf(Function);
		expect(tbillyield).toBeInstanceOf(Function);
	});
});
