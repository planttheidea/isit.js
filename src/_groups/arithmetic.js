// arithmetic
import * as equal from '../equal';
import * as even from '../even';
import * as finite from '../finite';
import * as greaterThan from '../greaterThan';
import * as inRange from '../inRange';
import * as lessThan from '../lessThan';
import * as negative from '../negative';
import * as odd from '../odd';
import * as positive from '../positive';

/**
 * @module arithmetic
 */

export const all = {
  even: even.isAllEven,
  finite: finite.isAllFinite,
  negative: negative.isAllNegative,
  odd: odd.isAllOdd,
  positive: positive.isAllPositive
};

export const any = {
  even: even.isAnyEven,
  finite: finite.isAnyFinite,
  negative: negative.isAnyNegative,
  odd: odd.isAnyOdd,
  positive: positive.isAnyPositive
};

export const not = {
  equal: equal.isNotEqual,
  even: even.isNotEven,
  finite: finite.isNotFinite,
  greaterThan: greaterThan.isNotGreaterThan,
  inRange: inRange.isNotInRange,
  lessThan: lessThan.isNotLessThan,
  negative: negative.isNotNegative,
  odd: odd.isNotOdd,
  positive: positive.isNotPositive
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
