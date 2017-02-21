// test
import test from 'ava';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/arithmetic';

test('if equal will correctly identify if the two parameters passed are equal in type and value', (t) => {
  const undef = undefined;
  const nul = null;
  const string = 'test';
  const number = 1;
  const array = ['foo', 'bar'];
  const object = {foo: 'bar', bar: 'baz'};
  const map = new Map().set('foo', 'bar');
  const set = new Set().add('foo');

  t.true(src.equal());
  t.true(src.equal(undef, undef));
  t.true(src.equal(nul, nul));
  t.true(src.equal(string, string));
  t.true(src.equal(number, number));
  t.true(src.equal(array, array));
  t.true(src.equal([...array], [...array]));
  t.true(src.equal(object, object));
  t.true(src.equal({...object}, {...object}));
  t.true(src.equal(map, new Map().set('foo', 'bar')));
  t.true(src.equal(set, new Set().add('foo')));
});

test('if equal will return false if the two parameters passed are not the same type', (t) => {
  const undef = undefined;
  const nul = null;
  const string = 'test';
  const number = 1;
  const array = ['foo', 'bar'];
  const otherArray = ['bar', 'baz'];
  const object = {foo: 'bar', bar: 'baz'};
  const otherObject = {bar: 'baz', baz: 'foo'};
  const map = new Map().set('foo', 'bar');
  const set = new Set().add('foo');

  t.false(src.equal(undef, nul));
  t.false(src.equal(undef, string));
  t.false(src.equal(undef, number));
  t.false(src.equal(undef, array));
  t.false(src.equal(undef, object));
  t.false(src.equal(undef, map));
  t.false(src.equal(undef, set));

  t.false(src.equal(nul, string));
  t.false(src.equal(nul, number));
  t.false(src.equal(nul, array));
  t.false(src.equal(nul, object));
  t.false(src.equal(nul, map));
  t.false(src.equal(nul, set));

  t.false(src.equal(string, number));
  t.false(src.equal(string, array));
  t.false(src.equal(string, object));
  t.false(src.equal(string, map));
  t.false(src.equal(string, set));

  t.false(src.equal(number, array));
  t.false(src.equal(number, object));
  t.false(src.equal(number, map));
  t.false(src.equal(number, set));

  t.false(src.equal(array, object));
  t.false(src.equal(array, map));
  t.false(src.equal(array, set));

  t.false(src.equal(object, map));
  t.false(src.equal(object, set));

  t.false(src.equal(map, set));

  // different values return false
  t.false(src.equal(array, otherArray));
  t.false(src.equal(object, otherObject));
  t.false(src.equal(map, new Map().set('bar', 'baz')));
  t.false(src.equal(set, new Set().add('bar')));
});

test('if equal will return false if the two parameters passed are the same type but not the same value', (t) => {
  const array = ['foo', 'bar'];
  const otherArray = ['bar', 'baz'];
  const object = {foo: 'bar', bar: 'baz'};
  const otherObject = {bar: 'baz', baz: 'foo'};
  const map = new Map().set('foo', 'bar');
  const set = new Set().add('foo');

  t.false(src.equal(array, otherArray));
  t.false(src.equal(object, otherObject));
  t.false(src.equal(map, new Map().set('bar', 'baz')));
  t.false(src.equal(set, new Set().add('bar')));
});

isNotOnly(all, any, not, 'equal');

test('if even will correctly identify if a number is even', (t) => {
  const even = 2;
  const odd = 3;
  const zero = 0;

  t.true(src.even(even));
  t.true(src.even(zero));
  t.false(src.even(odd));
});

test('if even returns false if parameter is not a number', (t) => {
  t.false(src.even('foo'));
  t.false(src.even('2'));
});

isAllAnyNot(all, any, not, 'even');

test('if finite will correctly identify if the number is finite', (t) => {
  const positiveInfinity = Infinity;
  const negativeInfinity = -Infinity;
  const zero = 0;
  const negative = -123;
  const positive = 123;

  t.true(src.finite(positive));
  t.true(src.finite(negative));
  t.true(src.finite(zero));
  t.false(src.finite(positiveInfinity));
  t.false(src.finite(negativeInfinity));
});

test('if finite returns false if parameter is not a number', (t) => {
  t.false(src.finite('foo'));
  t.false(src.finite('2'));
});

isAllAnyNot(all, any, not, 'finite');

test('if greaterThan will correctly identify if the first number is above the second number', (t) => {
  const first = 10;
  const second = 5;

  t.true(src.greaterThan(first, second));
  t.false(src.greaterThan(second, first));
  t.false(src.greaterThan(first, first));
});

test('if greaterThan returns false if any parameter is not a number', (t) => {
  const first = 10;
  const second = 5;

  t.false(src.greaterThan(first.toString(), second));
  t.false(src.greaterThan(second.toString(), first));
});

isNotOnly(all, any, not, 'greaterThan');

test('if inRange will correctly identify if the first number is between the second and third numbers', (t) => {
  const num = 10;
  const min = 5;
  const max = 15;

  t.true(src.inRange(num, min, max));
  t.false(src.inRange(min, num, max));
  t.false(src.inRange(max, min, num));
});

test('if inRange returns false if any parameter is not a number', (t) => {
  const num = 10;
  const min = 5;
  const max = 15;

  t.false(src.inRange(num.toString(), min, max));
  t.false(src.inRange(num, min.toString(), max));
  t.false(src.inRange(num, min, max.toString()));
});

isNotOnly(all, any, not, 'inRange');

test('if lessThan correctly identifies if the first number is below the second number', (t) => {
  const first = 5;
  const second = 10;

  t.true(src.lessThan(first, second));
  t.false(src.lessThan(second, first));
  t.false(src.lessThan(first, first));
});

test('if lessThan returns false if any parameter is not a number', (t) => {
  const first = 5;
  const second = 10;

  t.false(src.lessThan(first.toString(), second));
  t.false(src.lessThan(second.toString(), first));
});

isNotOnly(all, any, not, 'lessThan');

test('if negative will correctly identify if a number is negative', (t) => {
  const negativeInteger = -123;
  const negativeDecimal = -1.23;
  const positiveInteger = 123;
  const positiveDecimal = 1.23;
  const zero = 0;

  t.true(src.negative(negativeInteger));
  t.true(src.negative(negativeDecimal));
  t.false(src.negative(positiveInteger));
  t.false(src.negative(positiveDecimal));
  t.false(src.negative(zero));
});

test('if negative returns false if parameter is not a number', (t) => {
  t.false(src.negative('foo'));
  t.false(src.negative('-123'));
});

isAllAnyNot(all, any, not, 'negative');

test('if odd will correctly identify if a number is odd', (t) => {
  const even = 2;
  const odd = 3;
  const zero = 0;

  t.true(src.odd(odd));
  t.false(src.odd(zero));
  t.false(src.odd(even));
});

test('if odd returns false when parameter is not a number', (t) => {
  t.false(src.odd('foo'));
  t.false(src.odd('1'));
});

isAllAnyNot(all, any, not, 'odd');

test('if positive will correctly identify if a number is positive', (t) => {
  const negativeInteger = -123;
  const negativeDecimal = -1.23;
  const positiveInteger = 123;
  const positiveDecimal = 1.23;
  const zero = 0;

  t.true(src.positive(positiveInteger));
  t.true(src.positive(positiveDecimal));
  t.false(src.positive(negativeInteger));
  t.false(src.positive(negativeDecimal));
  t.false(src.positive(zero));
});

test('if positive returns false if parameter is not a number', (t) => {
  t.false(src.positive('foo'));
  t.false(src.positive('123'));
});

isAllAnyNot(all, any, not, 'positive');
