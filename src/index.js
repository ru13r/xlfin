'use strict';

const xlfunc = {
	...require('./financial/fv'),
	...require('./financial/npv'),
	...require('./financial/annuity'),
	...require('./financial/coupon'),
	...require('./financial/bonds'),
	...require('./financial/tbills'),
	...require('./financial/discount'),
	...require('./financial/conversions'),
	...require('./financial/depreciation'),
};

module.exports = {
	...xlfunc,
	curried: {}, // TODO export curried versions as well
	format: {}, // TODO format result to string with locales and some nice presets
	precision: {}, // TODO make iteration / precision configuration user-friendly
};
