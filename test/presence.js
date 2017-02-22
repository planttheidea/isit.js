// test
import test from 'ava';
import {
  isAllAnyNot
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/_groups/presence';

const zero = 0;
const falseBool = false;
const empty = '';
const undef = undefined;
const nul = null;
const string = 'foo';
const number = 123;
const array = [];
const object = {};
const map = new Map();
const set = new Set();

test('if empty will return true for non-existy items, plus empty sets of arrays, objects, and arguments', (t) => {
  t.true(src.empty());
  t.true(src.empty(undef));
  t.true(src.empty(nul));
  t.true(src.empty(empty));
  t.true(src.empty(array));
  t.true(src.empty(object));
  t.true(src.empty(new RegExp()));
  t.true(src.empty((() => {
    function foo() {
      return arguments;
    }

    return foo();
  })()));
  t.true(src.empty(map));
  t.true(src.empty(set));

  t.false(src.empty(zero));
  t.false(src.empty(string));
  t.false(src.empty(number));
  t.false(src.empty(map.set('foo', 'bar')));
  t.false(src.empty(set.add('foo')));
});

isAllAnyNot(all, any, not, 'empty');

test('if existy will return true only for undefined or null', (t) => {
  t.true(src.existy(string));
  t.true(src.existy(number));
  t.true(src.existy(array));
  t.true(src.existy(object));
  t.true(src.existy(zero));
  t.true(src.existy(falseBool));
  t.true(src.existy(empty));

  t.false(src.existy(undef));
  t.false(src.existy(nul));
});

isAllAnyNot(all, any, not, 'existy');

test('if falsy will identify falsy values correctly', (t) => {
  t.false(src.falsy(string));
  t.false(src.falsy(number));
  t.false(src.falsy(array));
  t.false(src.falsy(object));

  t.true(src.falsy(zero));
  t.true(src.falsy(falseBool));
  t.true(src.falsy(empty));
  t.true(src.falsy(undef));
  t.true(src.falsy(nul));
});

isAllAnyNot(all, any, not, 'falsy');

test('if truthy will identify truthy values correctly', (t) => {
  t.true(src.truthy(string));
  t.true(src.truthy(number));
  t.true(src.truthy(array));
  t.true(src.truthy(object));

  t.false(src.truthy(zero));
  t.false(src.truthy(falseBool));
  t.false(src.truthy(empty));
  t.false(src.truthy(undef));
  t.false(src.truthy(nul));
});

isAllAnyNot(all, any, not, 'truthy');

test('if whitespace returns true for all forms of whitespace', (t) => {
  t.false(src.whitespace(undef));
  t.false(src.whitespace(nul));
  t.false(src.whitespace(empty));
  t.false(src.whitespace(number));
  t.false(src.whitespace(string));
  t.false(src.whitespace(object));
  t.false(src.whitespace(array));

  const space = ' ';
  const spaces = '   ';
  const tabs = '       ';
  const carraigeReturns = `

  `;

  t.true(src.whitespace(space));
  t.true(src.whitespace(spaces));
  t.true(src.whitespace(tabs));
  t.true(src.whitespace(carraigeReturns));
});

isAllAnyNot(all, any, not, 'whitespace');
