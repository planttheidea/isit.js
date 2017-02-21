// arithmetic
import * as equal from './isitEqual';
import * as even from './isitEven';
import * as finite from './isitFinite';
import * as greaterThan from './isitGreaterThan';
import * as inRange from './isitInRange';
import * as lessThan from './isitLessThan';
import * as negative from './isitNegative';
import * as odd from './isitOdd';
import * as positive from './isitPositive';

/**
 * @module arithmetic
 */

export const all = {
  even: even.isitAllEven,
  finite: finite.isitAllFinite,
  negative: negative.isitAllNegative,
  odd: odd.isitAllOdd,
  positive: positive.isitAllPositive
};

export const any = {
  even: even.isitAnyEven,
  finite: finite.isitAnyFinite,
  negative: negative.isitAnyNegative,
  odd: odd.isitAnyOdd,
  positive: positive.isitAnyPositive
};

export const not = {
  equal: equal.isitNotEqual,
  even: even.isitNotEven,
  finite: finite.isitNotFinite,
  greaterThan: greaterThan.isitNotGreaterThan,
  inRange: inRange.isitNotInRange,
  lessThan: lessThan.isitNotLessThan,
  negative: negative.isitNotNegative,
  odd: odd.isitNotOdd,
  positive: positive.isitNotPositive
};

export default {
  equal: equal.default,
  even: even.default,
  finite: finite.default,
  greaterThan: greaterThan.default,
  inRange: inRange.default,
  lessThan: lessThan.default,
  negative: negative.default,
  odd: odd.default,
  positive: positive.default
};
