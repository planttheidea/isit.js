import isit from '../src';

export const testTypeOf = (t, key) => {
    t.equal(typeof isit[key], 'function');
};

export default {
    testTypeOf
};