// string
import * as camelCase from './isitCamelCase';
import * as capitalized from './isitCapitalized';
import * as dataUrl from './isitDataUrl';
import * as doubleByte from './isitDoubleByte';
import * as endsWith from './isitEndsWith';
import * as html from './isitHtml';
import * as includes from './isitIncludes';
import * as kebabCase from './isitKebabCase';
import * as lowerCase from './isitLowerCase';
import * as palindrome from './isitPalindrome';
import * as snakeCase from './isitSnakeCase';
import * as startCase from './isitStartCase';
import * as startsWith from './isitStartsWith';
import * as upperCase from './isitUpperCase';

export const all = {
  camelCase: camelCase.isitAllCamelCase,
  capitalized: capitalized.isitAllCapitalized,
  dataUrl: dataUrl.isitAllDataUrl,
  doubleByte: doubleByte.isitAllDoubleByte,
  html: html.isitAllHtml,
  kebabCase: kebabCase.isitAllKebabCase,
  lowerCase: lowerCase.isitAllLowerCase,
  palindrome: palindrome.isitAllPalindrome,
  snakeCase: snakeCase.isitAllSnakeCase,
  startCase: startCase.isitAllStartCase,
  upperCase: upperCase.isitAllUpperCase
};

export const any = {
  camelCase: camelCase.isitAnyCamelCase,
  capitalized: capitalized.isitAnyCapitalized,
  dataUrl: dataUrl.isitAnyDataUrl,
  doubleByte: doubleByte.isitAnyDoubleByte,
  html: html.isitAnyHtml,
  kebabCase: kebabCase.isitAnyKebabCase,
  lowerCase: lowerCase.isitAnyLowerCase,
  palindrome: palindrome.isitAnyPalindrome,
  snakeCase: snakeCase.isitAnySnakeCase,
  startCase: startCase.isitAnyStartCase,
  upperCase: upperCase.isitAnyUpperCase
};

export const not = {
  camelCase: camelCase.isitNotCamelCase,
  capitalized: capitalized.isitNotCapitalized,
  dataUrl: dataUrl.isitNotDataUrl,
  doubleByte: doubleByte.isitNotDoubleByte,
  endsWith: endsWith.isitNotEndsWith,
  html: html.isitNotHtml,
  includes: includes.isitNotIncludes,
  kebabCase: kebabCase.isitNotKebabCase,
  lowerCase: lowerCase.isitNotLowerCase,
  palindrome: palindrome.isitNotPalindrome,
  snakeCase: snakeCase.isitNotSnakeCase,
  startCase: startCase.isitNotStartCase,
  startsWith: startsWith.isitNotStartsWith,
  upperCase: upperCase.isitNotUpperCase
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
