'use strict';

/**
 * Function accrintm
 * Returns the accrued interest for a security that pays interest at maturity
 *
 * Issue, settlement and basis are truncated to integers.
 * If issue or settlement is not a valid date, returns the #VALUE! error value.
 * If rate ≤ 0 or if par ≤ 0,  returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If issue ≥ settlement, returns the #NUM! error value.
 *
 * @param {Date} issue					the security's issue date
 * @param {Date} settlement			the security's settlement date
 * @param {number} rate					the security's annual coupon rate.
 * @param {number} par					the security's par value. If you omit par, uses $1,000.
 * @param {number} [basis]			the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function accrintm(issue, settlement, rate, par, basis = 0) {}

/**
 * Function pricemat
 * Returns the price per $100 face value of a security that pays interest at maturity
 *
 * Issue, settlement, maturity and basis are truncated to integers.
 * If maturity issue or settlement is not a valid date, returns the #VALUE! error value.
 * If rate ≤ 0 or if yld ≤ 0,  returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement settlement date (the date when the security is purchased)
 * @param {Date} maturity		maturity date (the date when the security expires)
 * @param {Date} issue			the security's issue date
 * @param {number} rate			the security's annual coupon rate
 * @param {number} yld			the security's annual yield
 * @param {number} [basis]	the type of day count basis to use.
 *  * 												0 - US (NASD) 30/360 (used by default)
 * 														1 - Actual/actual
 * 														2 - Actual/360
 * 														3 - Actual/365
 * 														4 - European 30/360
 * @return {number}
 */
export function pricemat(
	settlement,
	maturity,
	issue,
	rate,
	yld,
	basis = 0,
) {}

/**
 * Function yieldmat
 * Returns the annual yield of a security that pays interest at maturity
 *
 * Issue, settlement, maturity and basis are truncated to integers.
 * If maturity, issue or settlement is not a valid date, returns the #VALUE! error value.
 * If rate ≤ 0 or if par ≤ 0,  returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement settlement date (the date when the security is purchased)
 * @param {Date} maturity		maturity date (the date when the security expires)
 * @param {Date} issue			the security's issue date
 * @param {number} rate			the security's annual coupon rate
 * @param {number} pr				the security's par value. If you omit par, uses $1,000
 * @param {number} [basis]	the type of day count basis to use.
 *  * 												0 - US (NASD) 30/360 (used by default)
 * 														1 - Actual/actual
 * 														2 - Actual/360
 * 														3 - Actual/365
 * 														4 - European 30/360
 * @return {number}
 */
export function yieldmat(
	settlement,
	maturity,
	issue,
	rate,
	pr,
	basis = 0,
) {}

/**
 * Function accrint
 * Returns the accrued interest for a security that pays periodic interest
 *
 * Issue, first_interest, settlement, frequency, and basis are truncated to integers.
 * If issue, first_interest, or settlement is not a valid date, returns the #VALUE! error value.
 * If rate ≤ 0 or if par ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If issue ≥ settlement, returns the #NUM! error value.
 *
 * @param {Date} issue					the security's issue date
 * @param {Date} first_interest	the security's first interest date
 * @param {Date} settlement			the security's settlement date
 * @param {number} rate					the security's annual coupon rate.
 * @param {number} par					the security's par value. If you omit par, uses $1,000.
 * @param {number} frequency		the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]			the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @param {boolean} [calc_method]  	the way to calculate the total accrued interest when the date of settlement
 * 																	is later than the date of first_interest.
 * 																		TRUE (1) returns the total accrued interest from issue to settlement.
 * 																		FALSE (0) returns the accrued interest from first_interest to settlement.
 * 																		If you do not enter the argument, it defaults to TRUE.
 * @return {number}
 */
export function accrint(
	issue,
	first_interest,
	settlement,
	rate,
	par,
	frequency,
	basis = 0,
	calc_method = true,
) {
	if (par === undefined) par = 1000;
}

//
/**
 * Function price
 * Returns the price per $100 face value of a security that pays periodic interest
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If yld ≤ 0 or if rate ≤ 0, returns the #NUM! error value.
 * If redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} rate				the security's annual coupon rate
 * @param {number} yld				the security's annual yield
 * @param {number} redemption	the security's redemption value per $100 face value
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function price(
	settlement,
	maturity,
	rate,
	yld,
	redemption,
	frequency,
	basis = 0,
) {}

/**
 * Function yield
 * Returns the yield on a security that pays periodic interest
 *
 * Settlement, maturity, and basis are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If rate ≤ 0, returns the #NUM! error value.
 * If pr <= 0 or redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement ≥ maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {number} rate				the security's annual coupon rate
 * @param {number} pr					the security's price per $100 face value (par)
 * @param {number} redemption	the security's redemption value per $100 face value
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  	 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
export function YIELD(
	settlement,
	maturity,
	rate,
	pr,
	redemption,
	frequency,
	basis = 0,
) {}

/**
 * Function oddfprice
 * Returns the price per $100 face value of a security with an odd first period
 *
 * Settlement, maturity, first_coupon and basis are truncated to integers.
 * If settlement, maturity, issue first_coupon is not a valid date, returns the #VALUE! error value.
 * Assert maturity > first_coupon > settlement > issue
 * If yld ≤ 0 or if rate ≤ 0, returns the #NUM! error value.
 * If redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 *
 * @param {Date} settlement 		settlement date (the date when the security is purchased)
 * @param {Date} maturity				maturity date (the date when the security expires)
 * @param {Date} issue					the security's issue date
 * @param {Date} first_coupon		the security's first coupon date
 * @param {number} rate					the security's annual coupon rate
 * @param {number} yld					the security's annual yield
 * @param {number} redemption		the security's redemption value per $100 face value
 * @param {number} frequency		the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]			the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function oddfprice(
	settlement,
	maturity,
	issue,
	first_coupon,
	rate,
	yld,
	redemption,
	frequency,
	basis = 0,
) {}

/**
 * Function oddfyield
 * Returns the yield of a security with an odd first period
 *
 * Settlement, maturity, first_coupon and basis are truncated to integers.
 * If settlement, maturity, issue first_coupon is not a valid date, returns the #VALUE! error value.
 * Assert maturity > first_coupon > settlement > issue
 * If yld ≤ 0 or if rate ≤ 0, returns the #NUM! error value.
 * If redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 *
 * @param {Date} settlement 		settlement date (the date when the security is purchased)
 * @param {Date} maturity				maturity date (the date when the security expires)
 * @param {Date} issue					the security's issue date
 * @param {Date} first_coupon		the security's first coupon date
 * @param {number} rate					the security's annual coupon rate
 * @param {number} pr						the security's price per $100 face value (par) // TODO is this correct?
 * @param {number} redemption		the security's redemption value per $100 face value
 * @param {number} frequency		the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]			the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function oddfyield(
	settlement,
	maturity,
	issue,
	first_coupon,
	rate,
	pr,
	redemption,
	frequency,
	basis = 0,
) {}

// Returns the price per $100 face value of a security with an odd last period
/**
 * Function oddlprice
 * Returns the price per $100 face value of a security with an odd first period
 *
 * Settlement, maturity, first_coupon and basis are truncated to integers.
 * If settlement, maturity, issue last_coupon is not a valid date, returns the #VALUE! error value.
 * Assert maturity > settlement > last_interest
 * If yld ≤ 0 or if rate ≤ 0, returns the #NUM! error value.
 * If redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 *
 * @param {Date} settlement 		settlement date (the date when the security is purchased)
 * @param {Date} maturity				maturity date (the date when the security expires)
 * @param {Date} last_interest	the security's last coupon date
 * @param {number} rate					the security's annual coupon rate
 * @param {number} yld					the security's annual yield
 * @param {number} redemption		the security's redemption value per $100 face value
 * @param {number} frequency		the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]			the type of day count basis to use.
 *  * 														0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function oddlprice(
	settlement,
	maturity,
	last_interest,
	rate,
	yld,
	redemption,
	frequency,
	basis = 0,
) {}

// Returns the yield of a security with an odd last period
/**
 * Function oddlyield
 * Returns the yield of a security with an odd first period
 *
 * Settlement, maturity, first_coupon and basis are truncated to integers.
 * If settlement, maturity, issue first_coupon is not a valid date, returns the #VALUE! error value.
 * Assert maturity > settlement > last_interest
 * If yld ≤ 0 or if rate ≤ 0, returns the #NUM! error value.
 * If redemption ≤ 0, returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 *
 * @param {Date} settlement 		settlement date (the date when the security is purchased)
 * @param {Date} maturity				maturity date (the date when the security expires)
 * @param {Date} last_interest	the security's last coupon date
 * @param {number} rate					the security's annual coupon rate
 * @param {number} pr						the security's price per $100 face value (par) // TODO is this correct?
 * @param {number} redemption		the security's redemption value per $100 face value
 * @param {number} frequency		the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]			the type of day count basis to use.
 * 																0 - US (NASD) 30/360 (used by default)
 * 																1 - Actual/actual
 * 																2 - Actual/360
 * 																3 - Actual/365
 * 																4 - European 30/360
 * @return {number}
 */
export function oddlyield(
	settlement,
	maturity,
	last_interest,
	rate,
	pr,
	redemption,
	frequency,
	basis = 0,
) {}

/**
 * Function duration
 * returns the Macauley duration for an assumed par value of $100.
 * Duration is defined as the weighted average of the present value of cash flows,
 * and is used as a measure of a bond price's response to changes in yield.
 *
 * Settlement, maturity and basis are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If coupon ≤ 0 or if yld ≤ 0,  returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {Date} coupon				the security's coupon rate
 * @param {number} yld				the security's annual yield
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
export function duration(
	settlement,
	maturity,
	coupon,
	yld,
	frequency,
	basis = 0,
) {}

/**
 * Function mduration
 * Returns the modified Macauley duration for a security with an assumed par value of $100.
 *
 * Settlement, maturity and basis are truncated to integers.
 * If maturity or settlement is not a valid date, returns the #VALUE! error value.
 * If coupon ≤ 0 or if yld ≤ 0,  returns the #NUM! error value.
 * If frequency is any number other than 1, 2, or 4, returns the #NUM! error value.
 * If basis < 0 or if basis > 4, returns the #NUM! error value.
 * If settlement >= maturity, returns the #NUM! error value.
 *
 * @param {Date} settlement 	settlement date (the date when the security is purchased)
 * @param {Date} maturity			maturity date (the date when the security expires)
 * @param {Date} coupon				the security's coupon rate
 * @param {number} yld				the security's annual yield
 * @param {number} frequency	the number of coupon payments per year (annual = 1, semiannual = 2, quarterly = 4)
 * @param {number} [basis]		the type of day count basis to use.
 *  * 													0 - US (NASD) 30/360 (used by default)
 * 															1 - Actual/actual
 * 															2 - Actual/360
 * 															3 - Actual/365
 * 															4 - European 30/360
 * @return {number}
 */
export function mduration(
	settlement,
	maturity,
	coupon,
	yld,
	frequency,
	basis = 0,
) {}
