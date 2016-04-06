import test from 'tape';
import isit from '../src';

import {
    testTypeOf
} from './_utils';

test('isitCamelCase', (t) => {
    t.plan(14);

    testTypeOf(t, 'camelCase');

    t.equal(isit.camelCase(), false);
    t.equal(isit.camelCase(123), false);
    t.equal(isit.camelCase('camelCaseExampleString'), true);
    t.equal(isit.camelCase('kebab-case-example-string'), false);
    t.equal(isit.camelCase('Capitalized And Start Case Example String'), false);
    t.equal(isit.camelCase('ALL CAPS WORK WITH CAPITALIZED BUT NOT START CASE'), false);
    t.equal(isit.camelCase('SNAKE_CASE_EXAMPLE_STRING'), false);

    t.equal(isit.all.camelCase('someCamelCase', 'fooBar'), true);
    t.equal(isit.all.camelCase('someCamelCase', 'foo-bar'), false);
    t.equal(isit.any.camelCase('someCamelCase', 'foo-bar'), true);
    t.equal(isit.any.camelCase('WOW_IM_LOAD', 'foo-bar'), false);
    t.equal(isit.not.camelCase('WOW_IM_LOAD'), true);
    t.equal(isit.not.camelCase('someCamelCase'), false);
});

test('isitCapitalized', (t) => {
    t.plan(14);

    testTypeOf(t, 'capitalized');

    t.equal(isit.capitalized(), false);
    t.equal(isit.capitalized(123), false);
    t.equal(isit.capitalized('camelCaseExampleString'), false);
    t.equal(isit.capitalized('kebab-case-example-string'), false);
    t.equal(isit.capitalized('Capitalized And Start Case Example String'), true);
    t.equal(isit.capitalized('ALL CAPS WORK WITH START CASE TOO'), true);
    t.equal(isit.capitalized('SNAKE_CASE_EXAMPLE_STRING'), true);

    t.equal(isit.all.capitalized('Words', 'SNAKE_CASE'), true);
    t.equal(isit.all.capitalized('Words', 'camelCase'), false);
    t.equal(isit.any.capitalized('Words', 'camelCase'), true);
    t.equal(isit.any.capitalized('kebab-case', 'camelCase'), false);
    t.equal(isit.not.capitalized('kebab-case'), true);
    t.equal(isit.not.capitalized('Words'), false);
});

test('isitEndWith', (t) => {
    t.plan(11);
    
    testTypeOf(t, 'endWith');

    t.equal(isit.endWith(), false);
    t.equal(isit.endWith(123), false);
    t.equal(isit.endWith('some string'), false);
    t.equal(isit.endWith('some string', 'ing'), true);
    t.equal(isit.endWith('some string', 'ome string'), true);
    t.equal(isit.endWith('some string', 'str'), false);
    t.equal(isit.endWith('some string', 'some'), false);
    t.equal(isit.endWith('some string', 'nope'), false);

    t.equal(isit.not.endWith('some string', 'some'), true);
    t.equal(isit.not.endWith('some string', 'string'), false);
});

test('isitEndsWith', (t) => {
    t.plan(11);

    testTypeOf(t, 'endsWith');

    t.equal(isit.endsWith(), false);
    t.equal(isit.endsWith(123), false);
    t.equal(isit.endsWith('some string'), false);
    t.equal(isit.endsWith('some string', 'ing'), true);
    t.equal(isit.endsWith('some string', 'ome string'), true);
    t.equal(isit.endsWith('some string', 'str'), false);
    t.equal(isit.endsWith('some string', 'some'), false);
    t.equal(isit.endsWith('some string', 'nope'), false);

    t.equal(isit.not.endsWith('some string', 'some'), true);
    t.equal(isit.not.endsWith('some string', 'string'), false);
});

test('isitInclude', (t) => {
    t.plan(11);

    testTypeOf(t, 'include');

    t.equal(isit.include(), false);
    t.equal(isit.include(123), false);
    t.equal(isit.include('some string'), false);
    t.equal(isit.include('some string', 'ing'), true);
    t.equal(isit.include('some string', 'ome string'), true);
    t.equal(isit.include('some string', 'str'), true);
    t.equal(isit.include('some string', 'some'), true);
    t.equal(isit.include('some string', 'nope'), false);

    t.equal(isit.not.include('some string', 'foo'), true);
    t.equal(isit.not.include('some string', 'str'), false);
});

test('isitIncludes', (t) => {
    t.plan(11);

    testTypeOf(t, 'includes');

    t.equal(isit.includes(), false);
    t.equal(isit.includes(123), false);
    t.equal(isit.includes('some string'), false);
    t.equal(isit.includes('some string', 'ing'), true);
    t.equal(isit.includes('some string', 'ome string'), true);
    t.equal(isit.includes('some string', 'str'), true);
    t.equal(isit.includes('some string', 'some'), true);
    t.equal(isit.includes('some string', 'nope'), false);

    t.equal(isit.not.includes('some string', 'foo'), true);
    t.equal(isit.not.includes('some string', 'str'), false);
});

test('isitKebabCase', (t) => {
    t.plan(14);

    testTypeOf(t, 'kebabCase');

    t.equal(isit.kebabCase(), false);
    t.equal(isit.kebabCase(123), false);
    t.equal(isit.kebabCase('camelCaseExampleString'), false);
    t.equal(isit.kebabCase('kebab-case-example-string'), true);
    t.equal(isit.kebabCase('Capitalized And Start Case Example String'), false);
    t.equal(isit.kebabCase('ALL CAPS WORK WITH CAPITALIZED BUT NOT START CASE'), false);
    t.equal(isit.kebabCase('SNAKE_CASE_EXAMPLE_STRING'), false);

    t.equal(isit.all.kebabCase('kebab-case', 'UPPER-KEBAB-CASE'), true);
    t.equal(isit.all.kebabCase('kebab-case', 'SNAKE_CASE'), false);
    t.equal(isit.any.kebabCase('kebab-case', 'SNAKE_CASE'), true);
    t.equal(isit.any.kebabCase('camelCase', 'SNAKE_CASE'), false);
    t.equal(isit.not.kebabCase('SNAKE_CASE'), true);
    t.equal(isit.not.kebabCase('kebab-case'), false);
});

test('isitLowerCase', (t) => {
    t.plan(15);

    testTypeOf(t, 'lowerCase');

    t.equal(isit.lowerCase(), false);
    t.equal(isit.lowerCase(123), false);
    t.equal(isit.lowerCase('lowercase string'), true);
    t.equal(isit.lowerCase('Mixed CASE string'), false);
    t.equal(isit.lowerCase('Start Case String'), false);
    t.equal(isit.lowerCase('UPPERCASE STRING'), false);
    t.equal(isit.lowerCase('kebab-case-example-string'), true);
    t.equal(isit.lowerCase('SNAKE_CASE_EXAMPLE_STRING'), false);

    t.equal(isit.all.lowerCase('foo', 'bar'), true);
    t.equal(isit.all.lowerCase('foo', 'BAR'), false);
    t.equal(isit.any.lowerCase('foo', 'BAR'), true);
    t.equal(isit.any.lowerCase('FOO', 'BAR'), false);
    t.equal(isit.not.lowerCase('UPPERCASE'), true);
    t.equal(isit.not.lowerCase('lowercase'), false);
});

test('isitPalindrome', (t) => {
    t.plan(13);

    testTypeOf(t, 'palindrome');

    t.equal(isit.palindrome(), false);
    t.equal(isit.palindrome(123), false);
    t.equal(isit.palindrome('tacocat'), true);
    t.equal(isit.palindrome('some normal string'), false);
    t.equal(isit.palindrome('Tacocat'), false); // case matters
    t.equal(isit.palindrome('a santa at nasa'), true); // space indifferent

    t.equal(isit.all.palindrome('tacocat', 'a santa at nasa'), true);
    t.equal(isit.all.palindrome('tacocat', 'normal string'), false);
    t.equal(isit.any.palindrome('tacocat', 'normal string'), true);
    t.equal(isit.any.palindrome('blah', 'normal string'), false);
    t.equal(isit.not.palindrome('normal string'), true);
    t.equal(isit.not.palindrome('tacocat'), false);
});

test('isitSnakeCase', (t) => {
    t.plan(14);

    testTypeOf(t, 'snakeCase');

    t.equal(isit.snakeCase(), false);
    t.equal(isit.snakeCase(123), false);
    t.equal(isit.snakeCase('camelCaseExampleString'), false);
    t.equal(isit.snakeCase('kebab-case-example-string'), false);
    t.equal(isit.snakeCase('Capitalized And Start Case Example String'), false);
    t.equal(isit.snakeCase('ALL CAPS WORK WITH CAPITALIZED BUT NOT START CASE'), false);
    t.equal(isit.snakeCase('SNAKE_CASE_EXAMPLE_STRING'), true);

    t.equal(isit.all.snakeCase('SNAKE_CASE', 'lower_snake_case'), true);
    t.equal(isit.all.snakeCase('SNAKE_CASE', 'kebab-case'), false);
    t.equal(isit.any.snakeCase('SNAKE_CASE', 'kebab-case'), true);
    t.equal(isit.any.snakeCase('camelCase', 'kebab-case'), false);
    t.equal(isit.not.snakeCase('camelCase'), true);
    t.equal(isit.not.snakeCase('SNAKE_CASE'), false);
});

test('isitStartCase', (t) => {
    t.plan(14);

    testTypeOf(t, 'startCase');

    t.equal(isit.startCase(), false);
    t.equal(isit.startCase(123), false);
    t.equal(isit.startCase('camelCaseExampleString'), false);
    t.equal(isit.startCase('kebab-case-example-string'), false);
    t.equal(isit.startCase('Capitalized And Start Case Example String'), true);
    t.equal(isit.startCase('ALL CAPS WORK WITH CAPITALIZED BUT NOT START CASE'), false);
    t.equal(isit.startCase('SNAKE_CASE_EXAMPLE_STRING'), false);

    t.equal(isit.all.startCase('Starting Word', 'Capitalized Statement'), true);
    t.equal(isit.all.startCase('Starting Word', 'kebab-case'), false);
    t.equal(isit.any.startCase('Starting Word', 'kebab-case'), true);
    t.equal(isit.any.startCase('camelCase', 'kebab-case'), false);
    t.equal(isit.not.startCase('lowercase words'), true);
    t.equal(isit.not.startCase('Start Case Words'), false);
});

test('isitStartWith', (t) => {
    t.plan(11);

    testTypeOf(t, 'startWith');

    t.equal(isit.startWith(), false);
    t.equal(isit.startWith(123), false);
    t.equal(isit.startWith('some string'), false);
    t.equal(isit.startWith('some string', 'ing'), false);
    t.equal(isit.startWith('some string', 'ome string'), false);
    t.equal(isit.startWith('some string', 'str'), false);
    t.equal(isit.startWith('some string', 'some'), true);
    t.equal(isit.startWith('some string', 'nope'), false);

    t.equal(isit.not.startWith('some string', 'string'), true);
    t.equal(isit.not.startWith('some string', 'string'), true);
});

test('isitStartsWith', (t) => {
    t.plan(11);

    testTypeOf(t, 'startsWith');

    t.equal(isit.startsWith(), false);
    t.equal(isit.startsWith(123), false);
    t.equal(isit.startsWith('some string'), false);
    t.equal(isit.startsWith('some string', 'ing'), false);
    t.equal(isit.startsWith('some string', 'ome string'), false);
    t.equal(isit.startsWith('some string', 'str'), false);
    t.equal(isit.startsWith('some string', 'some'), true);
    t.equal(isit.startsWith('some string', 'nope'), false);

    t.equal(isit.not.startsWith('some string', 'string'), true);
    t.equal(isit.not.startsWith('some string', 'string'), true);
});

test('isitUpperCase', (t) => {
    t.plan(15);

    testTypeOf(t, 'upperCase');

    t.equal(isit.upperCase(), false);
    t.equal(isit.upperCase(123), false);
    t.equal(isit.upperCase('lowercase string'), false);
    t.equal(isit.upperCase('Mixed CASE string'), false);
    t.equal(isit.upperCase('Start Case String'), false);
    t.equal(isit.upperCase('UPPERCASE STRING'), true);
    t.equal(isit.upperCase('kebab-case-example-string'), false);
    t.equal(isit.upperCase('SNAKE_CASE_EXAMPLE_STRING'), true);

    t.equal(isit.all.upperCase('UPPERCASE', 'IS', 'LOUD'), true);
    t.equal(isit.all.upperCase('UPPERCASE', 'IS', 'okay'), false);
    t.equal(isit.any.upperCase('UPPERCASE', 'IS', 'okay'), true);
    t.equal(isit.any.upperCase('lowercase', 'is', 'better'), false);
    t.equal(isit.not.upperCase('lowercase'), true);
    t.equal(isit.not.upperCase('UPPERCASE'), false);
});