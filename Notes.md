##Basis

Here’s the problem: If you lend somebody money at 6% interest, you’ll receive 6% for every year that goes by. In practice, you might have agreed that this means monthly interest payments of 0.5%. But if you calculate daily interest payments (or accrued interest), you’d receive 1/365th of 6% in interest for each day, but only 1/366th of 6% if it’s a leap year. Furthermore, a loan from january to june will incur 181 days of interest (182 in a leap year), but the same loan from july to december would incur 184 days of interest.

To remedy some of this complexity, and to make calculations simpler, there are a few different day count conventions that you can agree on when you’re lending somebody money or selling a bond. The list of these conventions is long, so I’ll settle on a common convention known as 30/360. In the 30/360 convention, every month is treated as 30 days, which means that a year has 360 days for the sake of interest calculations. If you want to calculate the interest owed over three months, you can multiply the annual interest by 3 x 30 / 360, which practically enough is 1/4.

The basic 30/360 calculation
The number of days between two dates (@fromDate and @toDate) is:

360*(@y2-@y1) + 30*(@m2-@m1) + (@d2-@d1)
.. where @y2 is the year of the end date, @y1 is the year of the start date, @m2 is the month of the end date, etc.

For this to work, we need to correct @toDay and @fromDay, notably when they are 31, or when the month is february. The rules for how this is done, however, vary a bit between the two most common 30/360 conventions, the US and European ones:

### US (NASD) 30/360
Also known as “bond basis” or “30U/360”. Commonly used by US agency issues and corporate bonds.

1. If both the start and end dates are on the last day of february, set @d2 to 30.
1. If the start date is on the last day of february, set @d1 to 30.
1. If @d1 is 30 or 31, and @d2 is 31, set @d2 to 30.
1. If @d1 is 31, set @d1 to 30.

### European 30/360

Also known as “30E/360”.

1. If @d1 is 31, set @d1 to 30.
1. If @d2 is 31, set @d2 to 30.

The Excel equivalent of this is 360*YEARFRAC(fromDate; toDate; 4).