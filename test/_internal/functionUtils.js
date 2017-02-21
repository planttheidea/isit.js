// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as utils from 'src/_internal/functionUtils';

test('if createIsAllMethod will call the method and return true if any of the parameters passed return a truthy value when passed to the method', (t) => {
  const isString = (foo) => {
    return typeof foo === 'string';
  };

  const fn = utils.createIsAllMethod(isString);

  t.is(typeof fn, 'function');

  t.true(fn('foo', 'bar', 'baz'));
  t.false(fn('foo', 'bar', 123));
  t.false(fn(123, null, {}));
});

test('if createIsAllMethod will return false when no parameters are passed to it', (t) => {
  const isString = (foo) => {
    return typeof foo === 'string';
  };

  const fn = utils.createIsAllMethod(isString);

  t.false(fn());
});

test('if createIsAnyMethod will call the method and return true if any of the parameters passed return a truthy value when passed to the method', (t) => {
  const isString = (foo) => {
    return typeof foo === 'string';
  };

  const fn = utils.createIsAnyMethod(isString);

  t.is(typeof fn, 'function');

  t.true(fn('foo', 'bar', 'baz'));
  t.true(fn('foo', 'bar', 123));
  t.false(fn(123, null, {}));
});

test('if createIsAnyMethod will return false when no parameters are passed to it', (t) => {
  const isString = (foo) => {
    return typeof foo === 'string';
  };

  const fn = utils.createIsAnyMethod(isString);

  t.false(fn());
});

test('if createIsNotMethod will call the method and return the inverse boolean truthy value of the function', (t) => {
  const isString = (foo) => {
    return typeof foo === 'string';
  };

  const fn = utils.createIsNotMethod(isString);

  t.is(typeof fn, 'function');

  t.false(fn('foo'));
  t.true(fn(123));
});

test('if createRegExpTest will create a method that tests the object it receives against the regexp in the closure', (t) => {
  const regexp = /foo/;

  const fn = utils.createRegExpTest(regexp);

  t.is(typeof fn, 'function');

  t.true(fn('foo'));
  t.false(fn('bar'));
});
