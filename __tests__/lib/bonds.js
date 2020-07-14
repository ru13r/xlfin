'use strict';
import f from '@';
import {
	accrintm,
	accrint,
	pricemat,
	yieldmat,
	price,
	YIELD,
	oddfprice,
	oddfyield,
	oddlprice,
	oddlyield,
	duration,
	mduration,
} from '@';

describe('accrintm', () => {
	it('is a function', () => {
		expect(f.accrintm).toBeInstanceOf(Function);
		expect(accrintm).toBeInstanceOf(Function);
	});
});

describe('pricemat', () => {
	it('is a function', () => {
		expect(f.pricemat).toBeInstanceOf(Function);
		expect(pricemat).toBeInstanceOf(Function);
	});
});

describe('yieldmat', () => {
	it('is a function', () => {
		expect(f.yieldmat).toBeInstanceOf(Function);
		expect(yieldmat).toBeInstanceOf(Function);
	});
});

describe('accrint,', () => {
	it('is a function', () => {
		expect(f.accrint).toBeInstanceOf(Function);
		expect(accrint).toBeInstanceOf(Function);
	});
});

describe('price', () => {
	it('is a function', () => {
		expect(f.price).toBeInstanceOf(Function);
		expect(price).toBeInstanceOf(Function);
	});
});

describe('YIELD', () => {
	it('is a function', () => {
		expect(f.YIELD).toBeInstanceOf(Function);
		expect(YIELD).toBeInstanceOf(Function);
	});
});

describe('oddfprice', () => {
	it('is a function', () => {
		expect(f.oddfprice).toBeInstanceOf(Function);
		expect(oddfprice).toBeInstanceOf(Function);
	});
});

describe('oddfyield', () => {
	it('is a function', () => {
		expect(f.oddfyield).toBeInstanceOf(Function);
		expect(oddfyield).toBeInstanceOf(Function);
	});
});

describe('oddlprice', () => {
	it('is a function', () => {
		expect(f.oddlprice).toBeInstanceOf(Function);
		expect(oddlprice).toBeInstanceOf(Function);
	});
});

describe('oddlyield', () => {
	it('is a function', () => {
		expect(f.oddlyield).toBeInstanceOf(Function);
		expect(oddlyield).toBeInstanceOf(Function);
	});
});

describe('duration', () => {
	it('is a function', () => {
		expect(f.duration).toBeInstanceOf(Function);
		expect(duration).toBeInstanceOf(Function);
	});
});

describe('mduration', () => {
	it('is a function', () => {
		expect(f.mduration).toBeInstanceOf(Function);
		expect(mduration).toBeInstanceOf(Function);
	});
});
