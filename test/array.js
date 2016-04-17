import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitInArray', (t) => {
    t.plan(5);

    testTypeOf(t, 'inArray');

    t.equal(isit.inArray([1, 2, 3], 1), true);
    t.equal(isit.inArray([1, 2, 3], '1'), false);

    t.equal(isit.not.inArray([1, 2, 3], '1'), true);
    t.equal(isit.not.inArray([1, 2, 3], 1), false);
});

test('isitSorted', (t) => {
    t.plan(10);

    testTypeOf(t, 'sorted');

    t.equal(isit.sorted([1, 2, 3]), true);
    t.equal(isit.sorted([3, 1, 2]), false);
    t.equal(isit.sorted([3, 2, 1]), true);

    t.equal(isit.all.sorted([1, 2, 3], [4, 5, 6]), true);
    t.equal(isit.all.sorted([1, 2, 3], [6, 4, 5]), false);
    t.equal(isit.any.sorted([1, 2, 3], [6, 4, 5]), true);
    t.equal(isit.any.sorted([3, 1, 2], [6, 4, 5]), false);
    t.equal(isit.not.sorted([3, 1, 2]), true);
    t.equal(isit.not.sorted([1, 2, 3]), false);
});