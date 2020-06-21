'use strict';

/**
 * Function AMORDEGRC
 * Returns the depreciation for each accounting period.
 * This function is provided for the French accounting system.
 * If an asset is purchased in the middle of the accounting period,
 * the prorated depreciation is taken into account.
 * The function is similar to AMORLINC,
 * except that a depreciation coefficient is applied in the calculation
 * depending on the life of the assets.
 *
 * This function will return the depreciation until the last period of the life of the assets or
 * until the cumulated value of depreciation is greater than the cost of the assets minus the salvage value.
 *
 * The depreciation rate will grow to 50 percent for the period preceding the last period
 * and will grow to 100 percent for the last period.
 * If the life of assets is between 0 (zero) and 1, 1 and 2, 2 and 3, or 4 and 5,
 * the #NUM! error value is returned.
 *
 * @param {number} cost						The cost of the asset.
 * @param {Date} date_purchased	The date of the purchase of the asset.
 * @param {Date} first_period		The date of the end of the first period.
 * @param {number} salvage				The salvage value at the end of the life of the asset.
 * @param {number} period					The period.
 * @param {number} rate						The rate of depreciation.
 * @param {number} [basis] 				The year basis to be used // TODO is this a subset of basis for bonds?
 * 																	0 or omitted - 360 days (NASD method)
 * 																	1 - Actual
 *																	3 - 365 days in a year
 *																	4 - 360 days in a year (European method)
 * @return {number}
 */
exports.AMORDEGRC = function (
	cost,
	date_purchased,
	first_period,
	salvage,
	period,
	rate,
	basis = 0,
) {};

/**
 * Function AMORLINC
 * Returns the depreciation for each accounting period.
 * This function is provided for the French accounting system.
 * If an asset is purchased in the middle of the accounting period,
 * the prorated depreciation is taken into account.
 *
 * @param {number} cost						The cost of the asset.
 * @param {Date} date_purchased		The date of the purchase of the asset.
 * @param {Date} first_period			The date of the end of the first period.
 * @param {number} salvage				The salvage value at the end of the life of the asset.
 * @param {number} period					The period.
 * @param {number} rate						The rate of depreciation.
 * @param {number} [basis] 				The year basis to be used // TODO is this a subset of basis for bonds?
 * 																	0 or omitted - 360 days (NASD method)
 * 																	1 - Actual
 *																	3 - 365 days in a year
 *																	4 - 360 days in a year (European method)
 * @return {number}
 */
exports.AMORLINC = function (
	cost,
	date_purchased,
	first_period,
	salvage,
	period,
	rate,
	basis = 0,
) {};

/**
 * Function DB
 * Returns the depreciation of an asset for a specified period by using the fixed-declining balance method
 *
 * Assert all arguments are positive.
 *
 * @param {number} cost			The cost of the asset.
 * @param {number} salvage	The salvage value at the end of the life of the asset.
 * @param {number} life			The number of periods over which the asset is being depreciated (useful life).
 * @param {number} period		The period for which you want to calculate the depreciation.
 * 													Period must use the same units as life.
 * @param {number} [month]	The number of months in the first year. If month is omitted, it is assumed to be 12.
 * @return {number}
 */
exports.DB = function (cost, salvage, life, period, month = 12) {};

/**
 * Function DDB
 * Returns the depreciation of an asset for a specified period by using the double-declining balance method
 * or some other method that you specify.
 * Use the VDB function if you want to switch to the straight-line depreciation method
 * when depreciation is greater than the declining balance calculation.
 *
 * Assert all arguments are positive.
 *
 * @param {number} cost			The cost of the asset.
 * @param {number} salvage	The salvage value at the end of the life of the asset.
 * @param {number} life			The number of periods over which the asset is being depreciated (useful life).
 * @param {number} period		The period for which you want to calculate the depreciation.
 * 													Period must use the same units as life.
 * @param {number} [factor]	The rate at which the balance declines. If factor is omitted, it is assumed to be 2
 * @return {number}
 */
exports.DDB = function (cost, salvage, life, period, factor = 2) {};

/**
 * Function SLN
 * Returns the straight-line depreciation of an asset for one period
 *
 * Assert all arguments are positive.
 *
 * @param {number} cost			The cost of the asset.
 * @param {number} salvage	The salvage value at the end of the life of the asset.
 * @param {number} life			The number of periods over which the asset is being depreciated (useful life).
 * @return {number}
 */
exports.SLN = function (cost, salvage, life) {
	return (cost - salvage) / life;
};

/**
 * Function SYD
 * Returns the sum-of-years' digits depreciation of an asset for a specified period
 *
 * Assert all arguments are positive.
 *
 * @param {number} cost			The cost of the asset.
 * @param {number} salvage	The salvage value at the end of the life of the asset.
 * @param {number} life			The number of periods over which the asset is being depreciated (useful life).
 * @param {number} per			The period and must use the same units as life.
 * @return {number}
 */
exports.SYD = function (cost, salvage, life, per) {
	return (
		((cost - salvage) * (life - per + 1) * 2) / (life * (life + 1))
	);
};

// Returns the depreciation of an asset for a specified or partial period by using a declining balance method

/**
 * Function VDB
 * Returns the depreciation of an asset for any period you specify, including partial periods,
 * using the double-declining balance method or some other method you specify.
 * VDB stands for variable declining balance.
 *
 * Assert all numeric arguments are positive.
 *
 * @param {number} cost					The cost of the asset.
 * @param {number} salvage			The salvage value at the end of the life of the asset.
 * @param {number} life					The number of periods over which the asset is being depreciated (useful life).
 * @param {number} start_period	The starting period for which you want to calculate the depreciation.
 * 															(must use the same units as life)
 * @param {number} end_period		The ending period for which you want to calculate the depreciation.
 * 															(must use the same units as life.)
 * @param {number} [factor]			The rate at which the balance declines. If factor is omitted, it is assumed to be 2
 * @param {Boolean} [no_switch]	whether to switch to straight-line depreciation when depreciation is greater
 * 															than the declining balance calculation.
 * 															True - do not switch, False (default) - switch
 * @return {number}
 */
exports.VDB = function (
	cost,
	salvage,
	life,
	start_period,
	end_period,
	factor = 2,
	no_switch = false,
) {};
