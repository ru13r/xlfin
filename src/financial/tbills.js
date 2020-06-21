'use strict';
import { diffInDays } from '@/common';
/**
 * Function TBILLEQ
 * Returns the bond-equivalent yield for a Treasury bill
 *
 * Settlement and maturity are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If settlement > maturity, or if maturity is more than one year after settlement, returns the #NUM! error value.
 * If discount ≤ 0 , returns the #NUM! error value.
 *
 * @param {Date} settlement settlement date (the date when the security is purchased)
 * @param {Date} maturity		maturity date (the date when the security expires)
 * @param {number} discount	the security's discount rate
 * @return {number}
 */
exports.TBILLEQ = function (settlement, maturity, discount) {
	const dsm = diffInDays(settlement, maturity);
	return (365 * discount) / (360 - discount * dsm);
};

/**
 * Function TBILLPRICE
 * Returns the price per $100 face value for a Treasury bill
 *
 * Settlement and maturity are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If settlement > maturity, or if maturity is more than one year after settlement, returns the #NUM! error value.
 * If discount ≤ 0 , returns the #NUM! error value.
 *
 * @param {Date} settlement settlement date (the date when the security is purchased)
 * @param {Date} maturity		maturity date (the date when the security expires)
 * @param {number} discount	the security's discount rate
 * @return {number}
 */
exports.TBILLPRICE = function (settlement, maturity, discount) {
	const dsm = diffInDays(settlement, maturity);
	return 100 * (1 - (discount * dsm) / 360);
};

/**
 * Function TBILLYIELD
 * Returns the yield for a Treasury bill
 *
 * Settlement and maturity are truncated to integers.
 * If settlement or maturity is not a valid date, returns the #VALUE! error value.
 * If settlement > maturity, or if maturity is more than one year after settlement, returns the #NUM! error value.
 * If pr ≤ 0 , returns the #NUM! error value.
 *
 * @param {Date} settlement settlement date (the date when the security is purchased)
 * @param {Date} maturity		maturity date (the date when the security expires)
 * @param {number} pr				price per $100 face value (par)
 * @return {number}
 */
exports.TBILLYIELD = function (settlement, maturity, pr) {
	const dsm = diffInDays(settlement, maturity);
	return ((100 - pr) / pr) * (360 / dsm);
};
