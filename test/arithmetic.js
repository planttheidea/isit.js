import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitAbove', (t) => {
    t.plan(8);

    testTypeOf(t, 'above');
    
    t.equal(isit.above(2), false);
    t.equal(isit.above('2', 1), false);
    t.equal(isit.above(2, '1'), false);
    t.equal(isit.above(2, 1), true);
    t.equal(isit.above(1, 2), false);

    t.equal(isit.not.above(1, 2), true);
    t.equal(isit.not.above(2, 1), false);
});

test('isitBelow', (t) => {
    t.plan(8);

    testTypeOf(t, 'below');

    t.equal(isit.below(2), false);
    t.equal(isit.below('1', 2), false);
    t.equal(isit.below(1, '2'), false);
    t.equal(isit.below(1, 2), true);
    t.equal(isit.below(2, 1), false);

    t.equal(isit.not.below(2, 1), true);
    t.equal(isit.not.below(1, 2), false);
});

test('isitDecimal', (t) => {
    t.plan(13);

    testTypeOf(t, 'decimal');

    t.equal(isit.decimal(1.23), true);
    t.equal(isit.decimal(-1.23), true);
    t.equal(isit.decimal(123 / 100), true);
    t.equal(isit.decimal(1), false);
    t.equal(isit.decimal('1.23'), false);
    t.equal(isit.decimal(1.00), false);

    t.equal(isit.all.decimal(1.23, 4.56), true);
    t.equal(isit.all.decimal(1.23, 4), false);

    t.equal(isit.any.decimal(1.23, 4), true);
    t.equal(isit.any.decimal('1.23', '4.56'), false);

    t.equal(isit.not.decimal(4), true);
    t.equal(isit.not.decimal(1.23), false);
});

test('isitEqual', (t) => {
    t.plan(19);

    testTypeOf(t, 'equal');

    t.equal(isit.equal(), true); // both parameters are undefined
    t.equal(isit.equal(undefined), true); // both parameters are undefined
    t.equal(isit.equal(undefined, undefined), true); // both parameters are undefined
    t.equal(isit.equal(null, undefined), false);
    t.equal(isit.equal(null, null), true);
    t.equal(isit.equal('test'), false);
    t.equal(isit.equal('test', 'test'), true);
    t.equal(isit.equal(1, 1), true);
    t.equal(isit.equal(1, 2), false);
    t.equal(isit.equal(1, '1'), false);
    t.equal(isit.equal([], []), true);
    t.equal(isit.equal([], ['foo', 'bar']), false);
    t.equal(isit.equal(['foo', 'bar'], ['foo', 'bar']), true);
    t.equal(isit.equal({}, {}), true);
    t.equal(isit.equal({}, {foo: 'bar'}), false);
    t.equal(isit.equal({foo: 'bar'}, {foo: 'bar'}), true);

    t.equal(isit.not.equal({}, {foo: 'bar'}), true);
    t.equal(isit.not.equal({foo: 'bar'}, {foo: 'bar'}), false);
});

test('isitEven', (t) => {
    t.plan(11);

    testTypeOf(t, 'even');

    t.equal(isit.even(2), true);
    t.equal(isit.even(1), false);
    t.equal(isit.even(0.6), false);
    t.equal(isit.even('2'), false);

    t.equal(isit.all.even(2, 4, 6), true);
    t.equal(isit.all.even(2, 4, 5), false);
    t.equal(isit.any.even(2, 4, 5), true);
    t.equal(isit.any.even(1, 3, 5), false);
    t.equal(isit.not.even(1), true);
    t.equal(isit.not.even(2), false);
});

test('isitFinite', (t) => {
    t.plan(12);

    testTypeOf(t, 'finite');

    t.equal(isit.finite(2), true);
    t.equal(isit.finite(-2), true);
    t.equal(isit.finite('test'), true);
    t.equal(isit.finite(Infinity), false);
    t.equal(isit.finite(-Infinity), false);

    t.equal(isit.all.finite(2, 3, 4), true);
    t.equal(isit.all.finite(2, 3, Infinity), false);
    t.equal(isit.any.finite(2, 3, Infinity), true);
    t.equal(isit.any.finite(Infinity, -Infinity, Infinity), false);
    t.equal(isit.not.finite(Infinity), true);
    t.equal(isit.not.finite(2), false);
});

test('isitInfinite', (t) => {
    t.plan(12);

    testTypeOf(t, 'infinite');

    t.equal(isit.infinite(2), false);
    t.equal(isit.infinite(-2), false);
    t.equal(isit.infinite('test'), false);
    t.equal(isit.infinite(Infinity), true);
    t.equal(isit.infinite(-Infinity), true);

    t.equal(isit.all.infinite(Infinity, -Infinity, Infinity), true);
    t.equal(isit.all.infinite(2, 3, Infinity), false);
    t.equal(isit.any.infinite(2, 3, Infinity), true);
    t.equal(isit.any.infinite(2, 3, 4), false);
    t.equal(isit.not.infinite(2), true);
    t.equal(isit.not.infinite(Infinity), false);
});

test('isitInteger', (t) => {
    t.plan(13);

    testTypeOf(t, 'integer');

    t.equal(isit.integer(1.23), false);
    t.equal(isit.integer(200 / 100), true);
    t.equal(isit.integer(1), true);
    t.equal(isit.integer(-1), true);
    t.equal(isit.integer('1.23'), false);
    t.equal(isit.integer(1.00), true);

    t.equal(isit.all.integer(1, 3), true);
    t.equal(isit.all.integer(1, 3.45), false);
    t.equal(isit.any.integer(1, 3.45), true);
    t.equal(isit.any.integer(1.23, 3.45), false);
    t.equal(isit.not.integer(1.23), true);
    t.equal(isit.not.integer(1), false);
});

test('isitNegative', (t) => {
    t.plan(13);

    testTypeOf(t, 'negative');

    t.equal(isit.negative(1), false);
    t.equal(isit.negative(-1), true);
    t.equal(isit.negative(1.23), false);
    t.equal(isit.negative(-1.23), true);
    t.equal(isit.negative('-1'), false);
    t.equal(isit.negative(0), false);

    t.equal(isit.all.negative(-1, -2), true);
    t.equal(isit.all.negative(-1, 2), false);
    t.equal(isit.any.negative(-1, 2), true);
    t.equal(isit.any.negative(1, 2), false);
    t.equal(isit.not.negative(1), true);
    t.equal(isit.not.negative(-1), false);
});

test('isitOdd', (t) => {
    t.plan(11);

    testTypeOf(t, 'odd');

    t.equal(isit.odd(2), false);
    t.equal(isit.odd(1), true);
    t.equal(isit.odd(0.6), false);
    t.equal(isit.odd('1'), false);

    t.equal(isit.all.odd(1, 3), true);
    t.equal(isit.all.odd(1, 4), false);
    t.equal(isit.any.odd(1, 4), true);
    t.equal(isit.any.odd(2, 4), false);
    t.equal(isit.not.odd(2), true);
    t.equal(isit.not.odd(1), false);
});

test('isitOver', (t) => {
    t.plan(8);

    testTypeOf(t, 'over');

    t.equal(isit.over(2), false);
    t.equal(isit.over('2', 1), false);
    t.equal(isit.over(2, '1'), false);
    t.equal(isit.over(2, 1), true);
    t.equal(isit.over(1, 2), false);

    t.equal(isit.not.over(1, 2), true);
    t.equal(isit.not.over(2, 1), false);
});

test('isitPositive', (t) => {
    t.plan(13);

    testTypeOf(t, 'positive');

    t.equal(isit.positive(1), true);
    t.equal(isit.positive(-1), false);
    t.equal(isit.positive(1.23), true);
    t.equal(isit.positive(-1.23), false);
    t.equal(isit.positive('1'), false);
    t.equal(isit.positive(0), false);

    t.equal(isit.all.positive(1, 2), true);
    t.equal(isit.all.positive(1, -2), false);
    t.equal(isit.any.positive(1, -2), true);
    t.equal(isit.any.positive(-1, -2), false);
    t.equal(isit.not.positive(-1), true);
    t.equal(isit.not.positive(1), false);
});

test('isitUnder', (t) => {
    t.plan(8);

    testTypeOf(t, 'under');

    t.equal(isit.under(2), false);
    t.equal(isit.under('1', 2), false);
    t.equal(isit.under(1, '2'), false);
    t.equal(isit.under(1, 2), true);
    t.equal(isit.under(2, 1), false);

    t.equal(isit.not.under(2, 1), true);
    t.equal(isit.not.under(1, 2), false);
});

test('isitWithin', (t) => {
    t.plan(10);

    testTypeOf(t, 'within');

    t.equal(isit.within(2, 1, 3), true);
    t.equal(isit.within(2, 2, 3), true);
    t.equal(isit.within(3, 2, 3), true);
    t.equal(isit.within(4, 1, 3), false);
    t.equal(isit.within('2', 1, 3), false);
    t.equal(isit.within(2, '1', 3), false);
    t.equal(isit.within(2, 1, '3'), false);

    t.equal(isit.not.within(4, 1, 3), true);
    t.equal(isit.not.within(2, 1, 3), false);
});