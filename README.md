# xlfin
A Node.JS implementation of Microsoft Excel financial functions with
documentation, unit testing and helpers. Useful to develop
applications with time value of money (TVM) or loan calculations.

## Target Features
* function declarations and names fully compatible with Microsoft Excel
* 100% unit test coverage
* high precision calculations
* no external dependencies
* comprehensive docs
* helpers for real-life usage (currying, number formats)

## Similar packages
* [tvm-financejs](https://www.npmjs.com/package/tvm-financejs)
Implementation of some TVM functions
* [formula.js](https://www.npmjs.com/package/@handsontable/formulajs)
Port of Excel functions (several forks, many financial functions are still in TODO
and there are several dependencies on math libs)
* a lot of smaller, imprecise or incomplete libraries

## Functions
List of implemented [Excel functions](https://support.microsoft.com/en-us/office/financial-functions-reference-5658d81e-6035-4f24-89c1-fbf124c2b1d8)
 

### Interest rate and dollar conversions
#### Interest rate conversions
[effect](https://support.microsoft.com/en-us/office/effect-function-910d4e4c-79e2-4009-95e6-507e04f11bc4)
**(nominal_rate, npery)**\
Returns the effective annual interest rate, given the nominal 
annual interest rate and the number of compounding periods per year.

[nominal](https://support.microsoft.com/en-us/office/nominal-function-7f1ae29b-6b92-435e-b950-ad8b190ddd2b)
**(effect_rate, npery)**\
Returns the nominal annual interest rate, given the effective rate 
and the number of compounding periods per year.

#### Dollar price conversions
[dollarde](https://support.microsoft.com/en-us/office/dollarde-function-db85aab0-1677-428a-9dfd-a38476693427)
**(fractional_dollar, fraction)**\
Converts a dollar price expressed as an integer part and a fraction part, 
such as 1.02, into a dollar price expressed as a decimal number. 
Fractional dollar numbers are sometimes used for security prices.

The fraction part of the value is divided by an integer that you specify. 
For example, if you want your price to be expressed to a precision of 1/16 of a dollar, 
you divide the fraction part by 16. In this case, 
1.02 represents $1.125 ($1 + 2/16 = $1.125).

[dollarfr](https://support.microsoft.com/en-us/office/dollarfr-function-0835d163-3023-4a33-9824-3042c5d4f495)
**(decimal_dollar, fraction)**\
Converts a dollar price, expressed as a decimal number, into a dollar price, expressed as a fraction

### Compounding and discounting

#### Future value of investments
[fvschedule](https://support.microsoft.com/en-us/office/fvschedule-function-bec29522-bd87-4082-bab9-a241f3fb251d)
**(principal, schedule)**\
Returns the future value of an initial principal after applying a series of 
compound interest rates. Use FVSCHEDULE to calculate the future value 
of an investment with a variable or adjustable rate.

[pduration](https://support.microsoft.com/en-us/office/pduration-function-44f33460-5be5-4c90-b857-22308892adaf)
**(rate, pv, fv)**\
Returns the number of periods required by an investment to reach a specified value.

[rri](https://support.microsoft.com/en-us/office/rri-function-6f5822d8-7ef1-4233-944c-79e8172930f4)
**(nper, pv, fv)**\
Returns an equivalent interest rate for the growth of an investment.


#### Annuities

[cumipmt](https://support.microsoft.com/en-us/office/cumipmt-function-61067bb0-9016-427d-b95b-1a752af0e606)
**(rate, nper, pv, start_period, end_period, type)**\
Returns the cumulative interest paid on a loan between start_period and end_period.

[cumprinc](https://support.microsoft.com/en-us/office/cumprinc-function-94a4516d-bd65-41a1-bc16-053a6af4c04d)
**(rate, nper, pv, start_period, end_period, type)**\
Returns the cumulative interest paid on a loan between start_period and end_period.

[fv](https://support.microsoft.com/en-us/office/fv-function-2eef9f44-a084-4c61-bdd8-4fe4bb1b71b3)
**(rate,nper,pmt,[pv],[type])**\
Returns the future value of an investment based on a constant interest rate. 
You can use FV with either periodic, constant payments, or a single lump sum payment.

[ipmt](https://support.microsoft.com/en-us/office/ipmt-function-5cce0ad6-8402-4a41-8d29-61a0b054cb6f)
**(rate, per, nper, pv, [fv], [type])**\
Returns the interest payment for a given period for an investment 
based on periodic, constant payments and a constant interest rate.

[ispmt](https://support.microsoft.com/en-us/office/ispmt-function-fa58adb6-9d39-4ce0-8f43-75399cea56cc)
**(rate, per, nper, pv)**\
Calculates the interest paid (or received) for the specified period 
of a loan (or investment) with even principal payments.

[nper](https://support.microsoft.com/en-us/office/nper-function-240535b5-6653-4d2d-bfcf-b6a38151d815)
**(rate, pmt, pv, [fv], [type])**\
Returns the number of periods for an investment based on periodic, 
constant payments and a constant interest rate.

[pmt](https://support.microsoft.com/en-us/office/pmt-function-0214da64-9a63-4996-bc20-214433fa6441)
**(rate, nper, pv, [fv], [type])**\
Returns the periodic payment for an annuity.

[ppmt](https://support.microsoft.com/en-us/office/ppmt-function-c370d9e3-7749-4ca4-beea-b06c6ac95e1b)
**(rate, per, nper, pv, [fv], [type])**\
Returns the payment on the principal for an investment for a given period.

[pv](https://support.microsoft.com/en-us/office/pv-function-23879d31-0e02-4321-be01-da16e8168cbd)
**(rate, nper, pmt, [fv], [type])**\
Returns the present value of a loan or an investment, based on a constant interest rate. You can use PV with either periodic, constant payments (such as a mortgage or other loan), or a future value that's your investment goal.

[rate](https://support.microsoft.com/en-us/office/rate-function-9f665657-4a7e-4bb7-a030-83fc59e748ce)
**(nper, pmt, pv, [fv], [type], [guess])**\
Returns the interest rate per period of an annuity. 
RATE is calculated by iteration and can have zero or more solutions. 
*If the successive results of RATE do not converge to within 0.0000001 
after 20 iterations, RATE returns the #NUM! error value.*

**Tips**
 * Make sure that you are consistent about the units you use for specifying rate and nper.
 If you make monthly payments on a four-year loan at 12 percent annual interest, use 12%/12 for rate and 4\*12 for nper. If you make annual payments on the same loan, use 12% for rate and 4 for nper.
 * To find the total amount paid over the duration of the loan, multiply the returned PMT value by nper.
 * For all the arguments, cash you pay out, such as deposits to savings,
 is represented by negative numbers; cash you receive, such as dividend checks,
 is represented by positive numbers.
 *  ISPMT counts each period beginning with zero, not with one.
 Most loans use a repayment schedule with even periodic payments.
 The IPMT function returns the interest payment for a given period for this type of loan.
 Some loans use a repayment schedule with even principal payments.
 The ISPMT function returns the interest payment for a given period for this type of loan.

#### NPV and IRR calculations
[irr](https://support.microsoft.com/en-us/office/irr-function-64925eaa-9988-495b-b290-3ad0c163c1bc)
**(values, [guess])**\
Returns the internal rate of return for a series of cash flows 
represented by the numbers in values. These cash flows do not have to be even, 
as they would be for an annuity. However, the cash flows must occur at regular intervals,
 such as monthly or annually. The internal rate of return is the interest rate 
 received for an investment consisting of payments 
(negative values) and income (positive values) that occur at regular periods.

[npv](https://support.microsoft.com/en-us/office/npv-function-8672cb67-2576-4d07-b67b-ac28acf2a568)
**(rate,value1,[value2],...)**\
Returns the net present value of an investment by using a discount rate 
and a series of future payments (negative values) and income (positive values).

[mirr](https://support.microsoft.com/en-us/office/mirr-function-b020f038-7492-4fb4-93c1-35c345b53524)
**(values, finance_rate, reinvest_rate)**\
Returns the modified internal rate of return for a series of periodic cash flows. 
MIRR considers both 
the cost of the investment and the interest received on reinvestment of cash.

[xirr](https://support.microsoft.com/en-us/office/xirr-function-de1242ec-6477-445b-b11b-a303ad9adc9d)
**(values, dates, [guess])**\
Returns the internal rate of return for a schedule of cash flows 
that is not necessarily periodic. To calculate
 the internal rate of return for a series of periodic cash flows, 
 use the IRR function.
Returns the internal rate of return for a schedule of cash flows that is not necessarily periodic

[xnpv](https://support.microsoft.com/en-us/office/xnpv-function-1b42bbf6-370f-4532-a0eb-d67c16b664b7)
**(rate, values, dates)**\
Returns the net present value for a schedule of cash flows that 
is not necessarily periodic. To calculate the net present value 
for a series of cash flows that is periodic, use the NPV function.

### Fixed-income securities

#### Pricing and discount rates
[disc](https://support.microsoft.com/en-us/office/disc-function-71fce9f3-3f05-4acf-a5a3-eac6ef4daa53)
**(settlement, maturity, pr, redemption, [basis])**\
Returns the discount rate for a security.

[intrate](https://support.microsoft.com/en-us/office/intrate-function-5cb34dde-a221-4cb6-b3eb-0b9e55e1316f)
**(settlement, maturity, investment, redemption, [basis])**\
Returns the interest rate for a fully invested security

[pricedisc](https://support.microsoft.com/en-us/office/pricedisc-function-d06ad7c1-380e-4be7-9fd9-75e3079acfd3)
**(settlement, maturity, discount, redemption, [basis])**\
Returns the price per $100 face value of a discounted security.

[received](https://support.microsoft.com/en-us/office/received-function-7a3f8b93-6611-4f81-8576-828312c9b5e5)
**(settlement, maturity, investment, discount, [basis])**\
Returns the amount received at maturity for a fully invested security.

[yielddisc](https://support.microsoft.com/en-us/office/yielddisc-function-a9dbdbae-7dae-46de-b995-615faffaaed7)
**(settlement, maturity, pr, redemption, [basis])**\
Returns the annual yield for a discounted security, for example, a Treasury bill.

#### Securities that pay periodic interest
[accrint](https://support.microsoft.com/en-us/office/accrint-function-fe45d089-6722-4fb3-9379-e1f911d8dc74)
**(issue, first_interest, settlement, rate, par, frequency, [basis], [calc_method])**\
Returns the accrued interest for a security that pays periodic interest.

[price](https://support.microsoft.com/en-us/office/price-function-3ea9deac-8dfa-436f-a7c8-17ea02c21b0a)
**(settlement, maturity, rate, yld, redemption, frequency, [basis])**\
Returns the price per $100 face value of a security that pays periodic interest.

[yield](https://support.microsoft.com/en-us/office/yield-function-f5f5ca43-c4bd-434f-8bd2-ed3c9727a4fe)
**(settlement, maturity, rate, pr, redemption, frequency, [basis])**\
Returns the yield on a security that pays periodic interest. 
Use YIELD to calculate bond yield.


#### Securities that pay interest at maturity
[accrintm](https://support.microsoft.com/en-us/office/accrintm-function-f62f01f9-5754-4cc4-805b-0e70199328a7)
**(issue, settlement, rate, par, [basis])**\ 
Returns the accrued interest for a security that pays interest at maturity.

[pricemat](https://support.microsoft.com/en-us/office/pricemat-function-52c3b4da-bc7e-476a-989f-a95f675cae77)
**(settlement, maturity, issue, rate, yld, [basis])**\
Returns the price per $100 face value of a security that pays interest at maturity.

[yieldmat](https://support.microsoft.com/en-us/office/yieldmat-function-ba7d1809-0d33-4bcb-96c7-6c56ec62ef6f)
**(settlement, maturity, issue, rate, pr, [basis])**\
Returns the annual yield of a security that pays interest at maturity.

#### T-bills
[tbilleq](https://support.microsoft.com/en-us/office/tbilleq-function-2ab72d90-9b4d-4efe-9fc2-0f81f2c19c8c)
**(settlement, maturity, discount)**\
Returns the bond-equivalent yield for a Treasury bill.

[tbillprice](https://support.microsoft.com/en-us/office/tbillprice-function-eacca992-c29d-425a-9eb8-0513fe6035a2)
**(settlement, maturity, discount)**\
Returns the price per $100 face value for a Treasury bill.

[tbillyield](https://support.microsoft.com/en-us/office/tbillyield-function-6d381232-f4b0-4cd5-8e97-45b9c03468ba)
**(settlement, maturity, pr)**\
Returns the yield for a Treasury bill.

#### Securities with odd (shorter/longer) first/last period 

[oddfprice](https://support.microsoft.com/en-us/office/oddfprice-function-d7d664a8-34df-4233-8d2b-922bcf6a69e1)
**(settlement, maturity, issue, first_coupon, rate, yld, redemption, frequency, [basis])**\
Returns the price per $100 face value of a security having an odd (short or long) 
first period.

[oddfyield](https://support.microsoft.com/en-us/office/oddfyield-function-66bc8b7b-6501-4c93-9ce3-2fd16220fe37)
**(settlement, maturity, issue, first_coupon, rate, pr, redemption, frequency, [basis])**\
Returns the yield of a security that has an odd (short or long) first period.

[oddlprice](https://support.microsoft.com/en-us/office/oddlprice-function-fb657749-d200-4902-afaf-ed5445027fc4)
**(settlement, maturity, last_interest, rate, yld, redemption, frequency, [basis])**\
Returns the price per $100 face value of a security having an odd (short or long) 
last coupon period.

[oddlyield](https://support.microsoft.com/en-us/office/oddlyield-function-c873d088-cf40-435f-8d41-c8232fee9238)
**(settlement, maturity, last_interest, rate, pr, redemption, frequency, [basis])**\
Returns the yield of a security with an odd last period.

#### Duration
[duration](https://support.microsoft.com/en-us/office/duration-function-b254ea57-eadc-4602-a86a-c8e369334038)
**(settlement, maturity, coupon, yld, frequency, [basis])**\
Returns the the Macauley duration for an assumed par value of $100. 
Duration is defined as the weighted average of the present value 
of cash flows, and is used as a measure of a bond price's response 
to changes in yield.

[mduration](https://support.microsoft.com/en-us/office/mduration-function-b3786a69-4f20-469a-94ad-33e5b90a763c)
**(settlement, maturity, coupon, yld, frequency, [basis])**\
Returns the modified duration for a security with an assumed par value of $100

#### Coupon calculations
[coupdaybs](https://support.microsoft.com/en-us/office/coupdaybs-function-eb9a8dfb-2fb2-4c61-8e5d-690b320cf872)
**(settlement, maturity, frequency, [basis])**\
Returns the number of days from the beginning of the coupon period to the settlement date.

[coupdays](https://support.microsoft.com/en-us/office/coupdays-function-cc64380b-315b-4e7b-950c-b30b0a76f671)
**(settlement, maturity, frequency, [basis])**\
Returns the number of days in the coupon period that contains the settlement date.

[coupdaysnc](https://support.microsoft.com/en-us/office/coupdaysnc-function-5ab3f0b2-029f-4a8b-bb65-47d525eea547)
**(settlement, maturity, frequency, [basis])**\
Returns the number of days from the settlement date to the next coupon date.

[coupncd](https://support.microsoft.com/en-us/office/coupncd-function-fd962fef-506b-4d9d-8590-16df5393691f)
**(settlement, maturity, frequency, [basis])**\
Returns the next coupon date after the settlement date.

[coupnum](https://support.microsoft.com/en-us/office/coupnum-function-a90af57b-de53-4969-9c99-dd6139db2522)
**(settlement, maturity, frequency, [basis])**\
Returns the number of coupons payable between the settlement date and maturity date,  
rounded up to the nearest whole coupon.

[couppcd](https://support.microsoft.com/en-us/office/couppcd-function-2eb50473-6ee9-4052-a206-77a9a385d5b3)
**(settlement, maturity, frequency, [basis])**\
Returns the previous coupon date before the settlement date.

### Depreciation and amortization functions

[amordegrc](https://support.microsoft.com/en-us/office/amordegrc-function-a14d0ca1-64a4-42eb-9b3d-b0dededf9e51)
**(cost, date_purchased, first_period, salvage, period, rate, [basis])**\
Returns the depreciation for each accounting period. 
This function is provided for the French accounting system. 
If an asset is purchased in the middle of the accounting period, 
the prorated depreciation is taken into account. 
The function is similar to AMORLINC, except that a depreciation coefficient 
is applied in the calculation depending on the life of the assets.

[amorlinc](https://support.microsoft.com/en-us/office/amorlinc-function-7d417b45-f7f5-4dba-a0a5-3451a81079a8)
**(cost, date_purchased, first_period, salvage, period, rate, [basis])**\
Returns the depreciation for each accounting period. This function is provided 
for the French accounting system. If an asset is purchased in the middle of 
the accounting period, the prorated depreciation is taken into account.

[db](https://support.microsoft.com/en-us/office/db-function-354e7d28-5f93-4ff1-8a52-eb4ee549d9d7)
**(cost, salvage, life, period, [month])**\
Returns the depreciation of an asset for a specified period by 
using the fixed-declining balance method.

[ddb](https://support.microsoft.com/en-us/office/ddb-function-519a7a37-8772-4c96-85c0-ed2c209717a5)
**(cost, salvage, life, period, [factor])**\
Returns the depreciation of an asset for a specified period 
by using the double-declining balance method or some other method that you specify.

[sln](https://support.microsoft.com/en-us/office/sln-function-cdb666e5-c1c6-40a7-806a-e695edc2f1c8)
**(cost, salvage, life)**\
Returns the straight-line depreciation of an asset for one period.

[syd](https://support.microsoft.com/en-us/office/syd-function-069f8106-b60b-4ca2-98e0-2a0f206bdb27)
**(cost, salvage, life, per)**\
Returns the sum-of-years' digits depreciation of an asset for a specified period

[vdb](https://support.microsoft.com/en-us/office/vdb-function-dde4e207-f3fa-488d-91d2-66d55e861d73)
**(cost, salvage, life, start_period, end_period, [factor], [no_switch])**\
Returns the depreciation of an asset for any period you specify, 
including partial periods, using the double-declining balance
 method or some other method you specify. VDB stands for variable declining balance.

## Differences
* Date format in Excel uses day count from 1 Jan 1900, while in 
JS it uses milliseconds from the start of epoch. The JS `Date` object
must be used. If you need conversion - you have to implement it 
manually.
* Instead of returning '#VALUE!' and '#NUM!' error strings 
functions throw `TypeError` and `RangeError`, respectively. 
