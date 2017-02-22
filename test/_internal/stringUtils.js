// test
import test from 'ava';
import sinon from 'sinon';

// src
import * as utils from 'src/_internal/stringUtils';

const camelCase = 'fooBarBaz';
const kebabCase = 'foo-bar-baz';
const snakeCase = 'foo_bar_baz';
const startCase = 'Foo Bar Baz';

test('if getArrayOfWords parses the words from the string correctly', (t) => {
  t.deepEqual(utils.getArrayOfWords(camelCase), ['foo', 'Bar', 'Baz']);
  t.deepEqual(utils.getArrayOfWords(kebabCase), ['foo', 'bar', 'baz']);
  t.deepEqual(utils.getArrayOfWords(snakeCase), ['foo', 'bar', 'baz']);
  t.deepEqual(utils.getArrayOfWords(startCase), ['Foo', 'Bar', 'Baz']);
});

test('if getArrayOfWords handles excess whitespace and split characters', (t) => {
  const extraWhiteSpace = 'foo    bar         baz';
  const extraDashes = 'foo----bar-----------baz';
  const extraUnderscores = 'foo____bar___________baz';
  const crazyHybrid = 'foo ---- bar _--_-_ _-baz';

  t.deepEqual(utils.getArrayOfWords(extraWhiteSpace), ['foo', 'bar', 'baz']);
  t.deepEqual(utils.getArrayOfWords(extraDashes), ['foo', 'bar', 'baz']);
  t.deepEqual(utils.getArrayOfWords(extraUnderscores), ['foo', 'bar', 'baz']);
  t.deepEqual(utils.getArrayOfWords(crazyHybrid), ['foo', 'bar', 'baz']);
});

test('if getLowerCaseWord will return the word all lowercase', (t) => {
  const upper = 'FOO';
  const mixed = 'FoO';
  const lower = 'foo';
  const capitalized = 'Foo';

  t.is(utils.getLowerCaseWord(upper), lower);
  t.is(utils.getLowerCaseWord(mixed), lower);
  t.is(utils.getLowerCaseWord(lower), lower);
  t.is(utils.getLowerCaseWord(capitalized), lower);
});

test('if getCapitalizedWord will return the word with the first letter uppercase and the rest lowercase', (t) => {
  const upper = 'FOO';
  const mixed = 'FoO';
  const lower = 'foo';
  const capitalized = 'Foo';

  t.is(utils.getCapitalizedWord(upper), capitalized);
  t.is(utils.getCapitalizedWord(mixed), capitalized);
  t.is(utils.getCapitalizedWord(lower), capitalized);
  t.is(utils.getCapitalizedWord(capitalized), capitalized);
});

test('if toCamelCase successfully converts all the strings into camelCase', (t) => {
  t.is(utils.toCamelCase(camelCase), camelCase);
  t.is(utils.toCamelCase(kebabCase), camelCase);
  t.is(utils.toCamelCase(snakeCase), camelCase);
  t.is(utils.toCamelCase(startCase), camelCase);
});

test('if toKebabCase successfully converts all the strings into kebabCase', (t) => {
  t.is(utils.toKebabCase(camelCase), kebabCase);
  t.is(utils.toKebabCase(kebabCase), kebabCase);
  t.is(utils.toKebabCase(snakeCase), kebabCase);
  t.is(utils.toKebabCase(startCase), kebabCase);
});

test('if toSnakeCase successfully converts all the strings into snakeCase', (t) => {
  t.is(utils.toSnakeCase(camelCase), snakeCase);
  t.is(utils.toSnakeCase(kebabCase), snakeCase);
  t.is(utils.toSnakeCase(snakeCase), snakeCase);
  t.is(utils.toSnakeCase(startCase), snakeCase);
});

test('if toStartCase successfully converts all the strings into startCase', (t) => {
  t.is(utils.toStartCase(camelCase), startCase);
  t.is(utils.toStartCase(kebabCase), startCase);
  t.is(utils.toStartCase(snakeCase), startCase);
  t.is(utils.toStartCase(startCase), startCase);
});
