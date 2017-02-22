// test
import test from 'ava';
import {
  isAllAnyNot,
  isNotOnly
} from './_utils/functionPermutations';

// src
import src, {
  all,
  any,
  not
} from 'src/_groups/string';

const CASE_TYPES = {
  camelCase: 'fooBarBaz',
  kebabCase: 'foo-bar-baz',
  lowerCase: 'foo bar baz',
  snakeCase: 'foo_bar_baz',
  startCase: 'Foo Bar Baz',
  upperCase: 'FOO BAR BAZ'
};

const DATA_URL = 'data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7';

test('if camelCase will identify camelCase and nothing else', (t) => {
  t.false(src.camelCase());
  t.false(src.camelCase(123));

  const {
    camelCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.camelCase(camelCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.camelCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'camelCase');

test('if capitalized will identify if something is capitalized or not', (t) => {
  t.false(src.capitalized());
  t.false(src.capitalized(123));

  const {
    startCase,
    upperCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.capitalized(startCase));
  t.true(src.capitalized(upperCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.capitalized(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'capitalized');

test('if dataUrl correctly identifies a data URL', (t) => {
  t.false(src.dataUrl());
  t.false(src.dataUrl(123));

  t.false(src.dataUrl('foo'));
  t.true(src.dataUrl(DATA_URL));
});

isAllAnyNot(all, any, not, 'dataUrl');

test('if doubleByte correctly identifies double-byte characters', (t) => {
  t.false(src.doubleByte());
  t.false(src.doubleByte(123));

  const normalString = 'foo bar baz';
  const doubleByteString = '中文';

  t.false(src.doubleByte(normalString));
  t.true(src.doubleByte(doubleByteString));
});

isAllAnyNot(all, any, not, 'doubleByte');

test('if endsWith will identify whether the string ends with the value or not', (t) => {
  const string = 'foo bar baz';
  const starter = 'foo b';
  const ender = 'r baz';

  t.false(src.endsWith());
  t.false(src.endsWith(string));
  t.false(src.endsWith(123, starter));

  t.false(src.endsWith(string, starter));
  t.true(src.endsWith(string, ender));
});

isNotOnly(all, any, not, 'endsWith');

test('if html correctly identifies an HTML string', (t) => {
  const withoutChildren = '<img src="test.jpg"/>';
  const withChildren = '<div>test</div>';

  t.false(src.html());
  t.false(src.html(123));

  t.false(src.html('div'));
  t.false(src.html('img'));

  t.true(src.html(withoutChildren));
  t.true(src.html(withChildren));
});

isAllAnyNot(all, any, not, 'html');

test('if includes correctly identifies if the string contains the value', (t) => {
  t.false(src.includes());
  t.false(src.includes(123));
  t.false(src.includes('foo', 123));

  const string = 'foo bar baz';
  const start = 'foo b';
  const middle = ' bar ';
  const end = 'r baz';
  const notInThere = 'asdf';

  t.true(src.includes(string, start));
  t.true(src.includes(string, middle));
  t.true(src.includes(string, end));
  t.false(src.includes(string, notInThere));
});

isNotOnly(all, any, not, 'includes');

test('if kebabCase will identify camelCase and nothing else', (t) => {
  t.false(src.kebabCase());
  t.false(src.kebabCase(123));

  const {
    kebabCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.kebabCase(kebabCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.kebabCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'kebabCase');

test('if lowerCase will identify matching items and nothing else', (t) => {
  t.false(src.lowerCase());
  t.false(src.lowerCase(123));

  const {
    kebabCase,
    lowerCase,
    snakeCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.lowerCase(kebabCase));
  t.true(src.lowerCase(lowerCase));
  t.true(src.lowerCase(snakeCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.lowerCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'lowerCase');

test('if palindrome will correctly identify palindromes', (t) => {
  t.false(src.palindrome());
  t.false(src.palindrome(123));

  const normalString = 'foo bar baz';
  const palindrome = 'tacocat';

  t.false(src.palindrome(normalString));
  t.true(src.palindrome(palindrome));
});

isAllAnyNot(all, any, not, 'palindrome');

test('if snakeCase will identify camelCase and nothing else', (t) => {
  t.false(src.snakeCase());
  t.false(src.snakeCase(123));

  const {
    snakeCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.snakeCase(snakeCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.snakeCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'snakeCase');

test('if startCase will identify camelCase and nothing else', (t) => {
  t.false(src.startCase());
  t.false(src.startCase(123));

  const {
    startCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.startCase(startCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.startCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'startCase');

test('if startsWith will identify whether the string starts with the value or not', (t) => {
  t.false(src.startsWith());
  t.false(src.startsWith('foo'));
  t.false(src.startsWith(123));

  const string = 'foo bar baz';
  const starter = 'foo b';
  const ender = 'r baz';

  t.true(src.startsWith(string, starter));
  t.false(src.startsWith(string, ender));
});

isNotOnly(all, any, not, 'startsWith');

test('if upperCase will identify camelCase and nothing else', (t) => {
  t.false(src.upperCase());
  t.false(src.upperCase(123));

  const {
    upperCase,
    ...restOfTypes
  } = CASE_TYPES;

  t.true(src.upperCase(upperCase));

  Object.keys(restOfTypes).forEach((key) => {
    t.false(src.upperCase(restOfTypes[key]));
  });
});

isAllAnyNot(all, any, not, 'upperCase');
