// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as utils from 'src/_internal/typeUtils';

test('if getObjectClass will convert the string passed into an object class format', (t) => {
  const value = 'foo';

  const result = utils.getObjectClass(value);

  t.is(result, `[object ${value}]`);
});

test('if toString calls the toString method on Object.prototype', (t) => {
  const spy = sinon.spy(Object.prototype, 'toString');
  const object = {};

  const result = utils.toString(object);

  t.true(spy.calledOnce);
  t.is(result, '[object Object]');

  spy.restore();
});
