import './type';
import './array';
import './arithmetic';
import './object';
import './presence';
import './environment';
import './regexp';
import './string';
import './time';

import test from 'tape';
import isit from '../src';

import type from '../src/type';
import array from '../src/array';
import arithmetic from '../src/arithmetic';
import object from '../src/object';
import presence from '../src/presence';
import environment from '../src/environment';
import regexp from '../src/regexp';
import string from '../src/string';
import time from '../src/time';

const compositeIsit = {
    ...type,
    ...array,
    ...arithmetic,
    ...object,
    ...presence,
    ...environment,
    ...regexp,
    ...string,
    ...time,
    all: {},
    any: {},
    not: {},
    setNamespace() {}
};

test('isit object contains all categories', (t) => {
    t.plan(2);

    const regularKeys = Object.keys(isit).sort();
    const compositeKeys = Object.keys(compositeIsit).sort();

    t.equal(regularKeys.length, compositeKeys.length);
    t.deepEqual(regularKeys, compositeKeys);
});