// test
import test from 'ava';

export const isAllAnyNot = (all, any, not, key) => {
  test(`if ${key} is on all, any, and not`, (t) => {
    t.not(Object.keys(all).indexOf(key), -1);
    t.not(Object.keys(any).indexOf(key), -1);
    t.not(Object.keys(not).indexOf(key), -1);
  });
};

export const isNotOnly = (all, any, not, key) => {
  test(`if ${key} is on not, but not all or any`, (t) => {
    t.is(Object.keys(all).indexOf(key), -1);
    t.is(Object.keys(any).indexOf(key), -1);
    t.not(Object.keys(not).indexOf(key), -1);
  });
};
