import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitEmpty', (t) => {
    t.plan(17);
    
    testTypeOf(t, 'empty');
    
    t.equal(isit.empty([]), true);
    t.equal(isit.empty([1]), false);
    t.equal(isit.empty({}), true);
    t.equal(isit.empty({foo: 'bar'}), false);
    t.equal(isit.empty(new RegExp('')), true);
    t.equal(isit.empty(/regexp/), false);
    t.equal(isit.empty(undefined), true);
    t.equal(isit.empty(null), true);
    t.equal(isit.empty(''), true);
    t.equal(isit.empty(0), false);

    t.equal(isit.all.empty([], '', {}), true);
    t.equal(isit.all.empty([], 'blah', {}), false);
    t.equal(isit.any.empty([], 'blah', {}), true);
    t.equal(isit.any.empty(['foo'], 'blah', {foo: 'bar'}), false);
    t.equal(isit.not.empty(['foo']), true);
    t.equal(isit.not.empty(undefined), false);
});

test('isitExisty', (t) => {
    t.plan(15);

    testTypeOf(t, 'existy');

    t.equal(isit.existy('test'), true);
    t.equal(isit.existy(1), true);
    t.equal(isit.existy(/regexp/), true);
    t.equal(isit.existy(function () {}), true);
    t.equal(isit.existy({}), true);
    t.equal(isit.existy([]), true);
    t.equal(isit.existy(undefined), false);
    t.equal(isit.existy(null), false);

    t.equal(isit.all.existy('test', 1), true);
    t.equal(isit.all.existy('test', null), false);
    t.equal(isit.any.existy('test', null), true);
    t.equal(isit.any.existy(null, undefined), false);
    t.equal(isit.not.existy(null), true);
    t.equal(isit.not.existy(/regexp/), false);
});

test('isitFalsy', (t) => {
    t.plan(17);

    testTypeOf(t, 'falsy');

    t.equal(isit.falsy(''), true);
    t.equal(isit.falsy(0), true);
    t.equal(isit.falsy(undefined), true);
    t.equal(isit.falsy(null), true);
    t.equal(isit.falsy('not falsy'), false);
    t.equal(isit.falsy(1), false);
    t.equal(isit.falsy(-1), false);
    t.equal(isit.falsy(function () {}), false);
    t.equal(isit.falsy([]), false);
    t.equal(isit.falsy({}), false);

    t.equal(isit.all.falsy('', 0, false), true);
    t.equal(isit.all.falsy('', 0, true), false);
    t.equal(isit.any.falsy('', 0, true), true);
    t.equal(isit.any.falsy('foo', 1, true), false);
    t.equal(isit.not.falsy('foo'), true);
    t.equal(isit.not.falsy(''), false);
});

test('isitSpace', (t) => {
    t.plan(11);

    testTypeOf(t, 'space');

    t.equal(isit.space(''), false);
    t.equal(isit.space(' '), true);
    t.equal(isit.space('     '), false);
    t.equal(isit.space('            '), false);

    t.equal(isit.all.space(' ', ' '), true);
    t.equal(isit.all.space(' ', '        '), false);
    t.equal(isit.any.space(' ', '        '), true);
    t.equal(isit.any.space('     ', '        '), false);
    t.equal(isit.not.space('  '), true);
    t.equal(isit.not.space(' '), false);
});

test('isitTruthy', (t) => {
    t.plan(17);

    testTypeOf(t, 'truthy');

    t.equal(isit.truthy(''), false);
    t.equal(isit.truthy(0), false);
    t.equal(isit.truthy(undefined), false);
    t.equal(isit.truthy(null), false);
    t.equal(isit.truthy('truthy'), true);
    t.equal(isit.truthy(1), true);
    t.equal(isit.truthy(-1), true);
    t.equal(isit.truthy(function () {}), true);
    t.equal(isit.truthy([]), true);
    t.equal(isit.truthy({}), true);

    t.equal(isit.all.truthy('foo', 1), true);
    t.equal(isit.all.truthy('foo', 0), false);
    t.equal(isit.any.truthy('foo', 0), true);
    t.equal(isit.any.truthy('', 0), false);
    t.equal(isit.not.truthy(''), true);
    t.equal(isit.not.truthy('foo'), false);
});

test('isitWhitespace', (t) => {
    t.plan(18);

    testTypeOf(t, 'whitespace');

    t.equal(isit.whitespace(''), false);
    t.equal(isit.whitespace('test'), false);
    t.equal(isit.whitespace(1), false);
    t.equal(isit.whitespace(new RegExp('')), false);
    t.equal(isit.whitespace(function () {}), false);
    t.equal(isit.whitespace({}), false);
    t.equal(isit.whitespace([]), false);
    t.equal(isit.whitespace(' '), true);
    t.equal(isit.whitespace('     '), true);
    t.equal(isit.whitespace('            '), true);
    t.equal(isit.whitespace(`
    
    `), true);

    t.equal(isit.all.whitespace(' ', '      '), true);
    t.equal(isit.all.whitespace(' ', 'bar'), false);
    t.equal(isit.any.whitespace('foo', '        '), true);
    t.equal(isit.any.whitespace('foo', 'bar'), false);
    t.equal(isit.not.whitespace('foo'), true);
    t.equal(isit.not.whitespace(`
    
    `), false);
});