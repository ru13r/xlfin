'use strict';

import * as fv from '@/lib/fv';
import * as npv from '@/lib/npv';
import * as annuity from '@/lib/annuity';
import * as coupon from '@/lib/coupon';
import * as bonds from '@/lib/bonds';
import * as tbills from '@/lib/tbills';
import * as discount from '@/lib/discount';
import * as conversions from '@/lib/conversions';
import * as depreciation from '@/lib/depreciation';

export * from '@/lib/fv';
export * from '@/lib/npv';
export * from '@/lib/annuity';
export * from '@/lib/coupon';
export * from '@/lib/bonds';
export * from '@/lib/tbills';
export * from '@/lib/discount';
export * from '@/lib/conversions';
export * from '@/lib/depreciation';

export default {
	...fv,
	...npv,
	...annuity,
	...coupon,
	...bonds,
	...tbills,
	...discount,
	...conversions,
	...depreciation,
};

// module.exports = {
// 	...xlfunc,
// 	curried: {}, // TODO export curried versions as well
// 	format: {}, // TODO format result to string with locales and some nice presets
// 	precision: {}, // TODO make iteration / precision configuration user-friendly
// };
