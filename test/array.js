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
} from 'src/_groups/array';

test('if sorted will return true if the array is sorted in either ascending or descending order', (t) => {
  const unsortedNumbers = [4, 2, 8];
  const sortedAscNumbers = [2, 4, 8];
  const sortedDescNumbers = [8, 4, 2];

  t.false(src.sorted(unsortedNumbers));
  t.true(src.sorted(sortedAscNumbers));
  t.true(src.sorted(sortedDescNumbers));

  const unsortedStrings = ['foo', 'bar', 'baz'];
  const sortedAscStrings = ['bar', 'baz', 'foo'];
  const sortedDescStrings = ['foo', 'baz', 'bar'];

  t.false(src.sorted(unsortedStrings));
  t.true(src.sorted(sortedAscStrings));
  t.true(src.sorted(sortedDescStrings));
});

isAllAnyNot(all, any, not, 'sorted');

test('if sortedAsc will return true if the array is sorted in ascending order', (t) => {
  const unsortedNumbers = [4, 2, 8];
  const sortedAscNumbers = [2, 4, 8];
  const sortedDescNumbers = [8, 4, 2];

  t.false(src.sortedAsc(unsortedNumbers));
  t.true(src.sortedAsc(sortedAscNumbers));
  t.false(src.sortedAsc(sortedDescNumbers));

  const unsortedStrings = ['foo', 'bar', 'baz'];
  const sortedAscStrings = ['bar', 'baz', 'foo'];
  const sortedDescStrings = ['foo', 'baz', 'bar'];

  t.false(src.sortedAsc(unsortedStrings));
  t.true(src.sortedAsc(sortedAscStrings));
  t.false(src.sortedAsc(sortedDescStrings));
});

test('if sortedAsc will return false if parameter is not an array', (t) => {
  t.false(src.sortedAsc('foo'));
});

isAllAnyNot(all, any, not, 'sortedAsc');

test('if sortedDesc will return true if the array is sorted in descending order', (t) => {
  const unsortedNumbers = [4, 2, 8];
  const sortedAscNumbers = [2, 4, 8];
  const sortedDescNumbers = [8, 4, 2];

  t.false(src.sortedDesc(unsortedNumbers));
  t.false(src.sortedDesc(sortedAscNumbers));
  t.true(src.sortedDesc(sortedDescNumbers));

  const unsortedStrings = ['foo', 'bar', 'baz'];
  const sortedAscStrings = ['bar', 'baz', 'foo'];
  const sortedDescStrings = ['foo', 'baz', 'bar'];

  t.false(src.sortedDesc(unsortedStrings));
  t.false(src.sortedDesc(sortedAscStrings));
  t.true(src.sortedDesc(sortedDescStrings));
});

test('if sortedDesc will return false if parameter is not an array', (t) => {
  t.false(src.sortedDesc('foo'));
});

isAllAnyNot(all, any, not, 'sortedDesc');
