// string
import * as camelCase from '../camelCase';
import * as capitalized from '../capitalized';
import * as dataUrl from '../dataUrl';
import * as doubleByte from '../doubleByte';
import * as endsWith from '../endsWith';
import * as html from '../html';
import * as includes from '../includes';
import * as kebabCase from '../kebabCase';
import * as lowerCase from '../lowerCase';
import * as palindrome from '../palindrome';
import * as snakeCase from '../snakeCase';
import * as startCase from '../startCase';
import * as startsWith from '../startsWith';
import * as upperCase from '../uppercase';

export const all = {
  camelCase: camelCase.isAllCamelCase,
  capitalized: capitalized.isAllCapitalized,
  dataUrl: dataUrl.isAllDataUrl,
  doubleByte: doubleByte.isAllDoubleByte,
  html: html.isAllHtml,
  kebabCase: kebabCase.isAllKebabCase,
  lowerCase: lowerCase.isAllLowerCase,
  palindrome: palindrome.isAllPalindrome,
  snakeCase: snakeCase.isAllSnakeCase,
  startCase: startCase.isAllStartCase,
  upperCase: upperCase.isAllUpperCase
};

export const any = {
  camelCase: camelCase.isAnyCamelCase,
  capitalized: capitalized.isAnyCapitalized,
  dataUrl: dataUrl.isAnyDataUrl,
  doubleByte: doubleByte.isAnyDoubleByte,
  html: html.isAnyHtml,
  kebabCase: kebabCase.isAnyKebabCase,
  lowerCase: lowerCase.isAnyLowerCase,
  palindrome: palindrome.isAnyPalindrome,
  snakeCase: snakeCase.isAnySnakeCase,
  startCase: startCase.isAnyStartCase,
  upperCase: upperCase.isAnyUpperCase
};

export const not = {
  camelCase: camelCase.isNotCamelCase,
  capitalized: capitalized.isNotCapitalized,
  dataUrl: dataUrl.isNotDataUrl,
  doubleByte: doubleByte.isNotDoubleByte,
  endsWith: endsWith.isNotEndsWith,
  html: html.isNotHtml,
  includes: includes.isNotIncludes,
  kebabCase: kebabCase.isNotKebabCase,
  lowerCase: lowerCase.isNotLowerCase,
  palindrome: palindrome.isNotPalindrome,
  snakeCase: snakeCase.isNotSnakeCase,
  startCase: startCase.isNotStartCase,
  startsWith: startsWith.isNotStartsWith,
  upperCase: upperCase.isNotUpperCase
};

export default {
  camelCase: camelCase.default,
  capitalized: capitalized.default,
  dataUrl: dataUrl.default,
  doubleByte: doubleByte.default,
  endsWith: endsWith.default,
  html: html.default,
  includes: includes.default,
  kebabCase: kebabCase.default,
  lowerCase: lowerCase.default,
  palindrome: palindrome.default,
  snakeCase: snakeCase.default,
  startCase: startCase.default,
  startsWith: startsWith.default,
  upperCase: upperCase.default
};
