import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

const getArguments = function () {
    return arguments;
};

const testFunction = (t, key, value, isKey) => {
    t.equal(isit[key](value), isKey);
};

const POSSIBLE_TYPES = {
    arguments: getArguments(1, 2, 3),
    array: [],
    boolean: true,
    char: 'C',
    date: new Date(),
    error: new Error(),
    'function': function () {},
    object: {
        foo: 'bar'
    },
    json: JSON.stringify({
        foo: 'bar'
    }),
    nan: NaN,
    'null': null,
    number: 1,
    regexp: /regex/,
    string: 'Word',
    symbol: Symbol('hello'),
    typedArray: new Float32Array(),
    'undefined': undefined
};
const NUMBER_OF_KEYS = Object.keys(POSSIBLE_TYPES).length;
const NUMBER_OF_TESTS = NUMBER_OF_KEYS + 1;

test('isitArguments', (t) => {
    const keyToTest = 'arguments';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    const args = getArguments('foo', 'bar');
    const otherArgs = getArguments(4, 5, 6);

    t.equal(isit.all.arguments(args, otherArgs), true);
    t.equal(isit.all.arguments(args, []), false);
    t.equal(isit.any.arguments(args, []), true);
    t.equal(isit.any.arguments({}, []), false);
    t.equal(isit.not.arguments({}), true);
    t.equal(isit.not.arguments(args), false);
});

test('isitArray', (t) => {
    const keyToTest = 'array';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.array([], ['foo', 'bar']), true);
    t.equal(isit.all.array({}, ['foo', 'bar']), false);
    t.equal(isit.any.array({}, ['foo', 'bar']), true);
    t.equal(isit.any.array({}, {foo: 'bar'}), false);
    t.equal(isit.not.array({}), true);
    t.equal(isit.not.array([]), false);
});

test('isitBoolean', (t) => {
    const keyToTest = 'boolean';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.boolean(true, false), true);
    t.equal(isit.all.boolean(true, 'false'), false);
    t.equal(isit.any.boolean(true, 'false'), true);
    t.equal(isit.any.boolean('true', 'false'), false);
    t.equal(isit.not.boolean('true'), true);
    t.equal(isit.not.boolean(true), false);
});

test('isitChar', (t) => {
    const keyToTest = 'char';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.char('C', 'D'), true);
    t.equal(isit.all.char('C', 'Dee'), false);
    t.equal(isit.any.char('C', 'Dee'), true);
    t.equal(isit.any.char('Cee', 'Dee'), false);
    t.equal(isit.not.char('Cee'), true);
    t.equal(isit.not.char('C'), false);
});

test('isitDate', (t) => {
    const keyToTest = 'date';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.date(new Date(), new Date(2016, 0, 1)), true);
    t.equal(isit.all.date(new Date(), '2016-01-01'), false);
    t.equal(isit.any.date(new Date(), '2016-01-01'), true);
    t.equal(isit.any.date('date', '2016-01-01'), false);
    t.equal(isit.not.date('date'), true);
    t.equal(isit.not.date(new Date()), false);
});

test('isitError', (t) => {
    const keyToTest = 'error';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.error(new Error(), new TypeError()), true);
    t.equal(isit.all.error(new Error(), new Date()), false);
    t.equal(isit.any.error(new Error(), new Date()), true);
    t.equal(isit.any.error(new RegExp(), new Date()), false);
    t.equal(isit.not.error(new RegExp()), true);
    t.equal(isit.not.error(new Error()), false);
});

test('isitFunction', (t) => {
    const keyToTest = 'function';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.function(function () {}, () => {}), true);
    t.equal(isit.all.function(function () {}, 'function'), false);
    t.equal(isit.any.function(function () {}, 'function'), true);
    t.equal(isit.any.function(/regexp/, 'function'), false);
    t.equal(isit.not.function(/regexp/), true);
    t.equal(isit.not.function(function () {}), false);
});

test('isitJSON', (t) => {
    const keyToTest = 'json';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        let isKey = false;

        if (key === 'json' || value === true || value === 1 || value === null) {
            isKey = true;
        }

        testFunction(t, keyToTest, value, isKey);
    }

    const json = JSON.stringify({
        foo: 'bar'
    });
    const otherJson = JSON.stringify('true');

    t.equal(isit.all.json(json, otherJson), true);
    t.equal(isit.all.json(json, {}), false);
    t.equal(isit.any.json(json, {}), true);
    t.equal(isit.any.json('test', {}), false);
    t.equal(isit.not.json('test'), true);
    t.equal(isit.not.json(json), false);
});

test('isitNaN', (t) => {
    const keyToTest = 'nan';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.nan(NaN, NaN), true);
    t.equal(isit.all.nan(NaN, 2), false);
    t.equal(isit.any.nan(NaN, 2), true);
    t.equal(isit.any.nan(4, 2), false);
    t.equal(isit.not.nan(4), true);
    t.equal(isit.not.nan(NaN), false);
});

test('isitNull', (t) => {
    const keyToTest = 'null';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.null(null, null), true);
    t.equal(isit.all.null(null, undefined), false);
    t.equal(isit.any.null(null, undefined), true);
    t.equal(isit.any.null(2, undefined), false);
    t.equal(isit.not.null(2), true);
    t.equal(isit.not.null(null), false);
});

test('isitNumber', (t) => {
    const keyToTest = 'number';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.number(3, 1.23), true);
    t.equal(isit.all.number(3, '1.23'), false);
    t.equal(isit.any.number(3, '1.23'), true);
    t.equal(isit.any.number(/123/, '1.23'), false);
    t.equal(isit.not.number(/123/), true);
    t.equal(isit.not.number(123), false);
});

test('isitObject', (t) => {
    const keyToTest = 'object';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.object({}, {foo: 'bar'}), true);
    t.equal(isit.all.object([], {foo: 'bar'}), false);
    t.equal(isit.any.object([], {foo: 'bar'}), true);
    t.equal(isit.any.object([], ['foo', 'bar']), false);
    t.equal(isit.not.object([]), true);
    t.equal(isit.not.object({}), false);
});

test('isitRegExp', (t) => {
    const keyToTest = 'regexp';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equal(isit.all.regexp(/foo/, /bar/), true);
    t.equal(isit.all.regexp(/foo/, 'bar'), false);
    t.equal(isit.any.regexp(/foo/, 'bar'), true);
    t.equal(isit.any.regexp('foo', 'bar'), false);
    t.equal(isit.not.regexp('foo'), true);
    t.equal(isit.not.regexp(/foo/), false);
});

test('isitSameType', (t) => {
    const otherTypes = {
        arguments: getArguments(4, 5, 6),
        array: [1, 2],
        boolean: false,
        char: 'D',
        date: new Date(2014, 0, 1),
        error: new TypeError(),
        'function': () => {},
        object: {
            fooz: 'baz'
        },
        json: JSON.stringify({
            fooz: 'baz'
        }),
        nan: NaN,
        'null': null,
        number: 2,
        regexp: /RegExp/,
        string: 'String',
        symbol: Symbol('goodbye'),
        typedArray: new Float32Array(),
        'undefined': undefined
    };
    const keyToTest = 'sameType';

    t.plan(NUMBER_OF_KEYS * 2 + 1 + 2);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];
        const otherValue = otherTypes[key];
        const unmatchingKey = key === 'array' ? 'object' : 'array';
        const unmatchingValue = otherTypes[unmatchingKey];

        t.equal(isit[keyToTest](value, otherValue), true);
        t.equal(isit[keyToTest](value, unmatchingValue), false);
    }

    t.equal(isit.not.sameType(/regexp/, 1), true);
    t.equal(isit.not.sameType(/regexp/, /number/), false);
});

test('isitString', (t) => {
    const keyToTest = 'string';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === 'string' || key === 'char' || key === 'json');
    }

    t.equals(isit.all.string('foo', 'bar'), true);
    t.equals(isit.all.string('foo', 123), false);
    t.equals(isit.any.string('foo', 123), true);
    t.equals(isit.any.string(null, 123), false);
    t.equals(isit.not.string(null), true);
    t.equals(isit.not.string('foo'), false);
});

test('isitSymbol', (t) => {
    const keyToTest = 'symbol';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equals(isit.all.symbol(Symbol('foo'), Symbol('bar')), true);
    t.equals(isit.all.symbol(Symbol('foo'), ['bar']), false);
    t.equals(isit.any.symbol(Symbol('foo'), ['bar']), true);
    t.equals(isit.any.symbol('foo', ['bar']), false);
    t.equals(isit.not.symbol('foo'), true);
    t.equals(isit.not.symbol(Symbol('foo')), false);
});

test('isitTypedArray', (t) => {
    const keyToTest = 'typedArray';

    t.plan(NUMBER_OF_TESTS + 15);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

  /**
   * test all possible types of float arrays
   */
    const int8Array = new Int8Array();
    const uint8Array = new Uint8Array();
    const uint8ClampedArray = new Uint8ClampedArray();
    const int16Array = new Int16Array();
    const uint16Array = new Uint16Array();
    const int32Array = new Int32Array();
    const uint32Array = new Uint32Array();
    const float32Array = new Float32Array();
    const float64Array = new Float64Array();

    t.equals(isit.typedArray(int8Array), true);
    t.equals(isit.typedArray(uint8Array), true);
    t.equals(isit.typedArray(uint8ClampedArray), true);
    t.equals(isit.typedArray(int16Array), true);
    t.equals(isit.typedArray(uint16Array), true);
    t.equals(isit.typedArray(int32Array), true);
    t.equals(isit.typedArray(uint32Array), true);
    t.equals(isit.typedArray(float32Array), true);
    t.equals(isit.typedArray(float64Array), true);

    t.equals(isit.all.typedArray(int8Array, uint32Array, float64Array), true);
    t.equals(isit.all.typedArray(int8Array, uint32Array, []), false);
    t.equals(isit.any.typedArray(int8Array, uint32Array, []), true);
    t.equals(isit.any.typedArray(null, {}, []), false);
    t.equals(isit.not.typedArray([]), true);
    t.equals(isit.not.typedArray(uint16Array), false);
});

test('isitUndefined', (t) => {
    const keyToTest = 'undefined';

    t.plan(NUMBER_OF_TESTS + 6);

    testTypeOf(t, keyToTest);

    for (let key in POSSIBLE_TYPES) {
        const value = POSSIBLE_TYPES[key];

        testFunction(t, keyToTest, value, key === keyToTest);
    }

    t.equals(isit.all.undefined(undefined, undefined), true);
    t.equals(isit.all.undefined(undefined, null), false);
    t.equals(isit.any.undefined(undefined, null), true);
    t.equals(isit.any.undefined(123, null), false);
    t.equals(isit.not.undefined(123), true);
    t.equals(isit.not.undefined(undefined), false);
});