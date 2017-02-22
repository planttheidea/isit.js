// types
import * as args from '../arguments';
import * as array from '../array';
import * as boolean from '../boolean';
import * as char from '../char';
import * as date from '../date';
import * as decimal from '../decimal';
import * as error from '../error';
import * as func from '../function';
import * as generator from '../generator';
import * as integer from '../integer';
import * as json from '../json';
import * as map from '../map';
import * as nan from '../nan';
import * as nul from '../null';
import * as number from '../number';
import * as object from '../object';
import * as plainObject from '../plainObject';
import * as regexp from '../regexp';
import * as sameType from '../sameType';
import * as set from '../set';
import * as string from '../string';
import * as symbol from '../symbol';
import * as typedArray from '../typedArray';
import * as undef from '../undefined';

export const all = {
  arguments: args.isAllArguments,
  array: array.isAllArray,
  boolean: boolean.isAllBoolean,
  char: char.isAllChar,
  date: date.isAllDate,
  decimal: decimal.isAllDecimal,
  error: error.isAllError,
  function: func.isAllFunction,
  generator: generator.isAllGenerator,
  integer: integer.isAllInteger,
  json: json.isAllJson,
  map: map.isAllMap,
  nan: nan.isAllNaN,
  null: nul.isAllNull,
  number: number.isAllNumber,
  object: object.isAllObject,
  plainObject: plainObject.isAllPlainObject,
  regexp: regexp.isAllRegExp,
  set: set.isAllSet,
  string: string.isAllString,
  symbol: symbol.isAllSymbol,
  typedArray: typedArray.isAllTypedArray,
  undefined: undef.isAllUndefined
};

export const any = {
  arguments: args.isAnyArguments,
  array: array.isAnyArray,
  boolean: boolean.isAnyBoolean,
  char: char.isAnyChar,
  date: date.isAnyDate,
  decimal: decimal.isAnyDecimal,
  error: error.isAnyError,
  function: func.isAnyFunction,
  generator: generator.isAnyGenerator,
  integer: integer.isAnyInteger,
  json: json.isAnyJson,
  map: map.isAnyMap,
  nan: nan.isAnyNaN,
  null: nul.isAnyNull,
  number: number.isAnyNumber,
  object: object.isAnyObject,
  plainObject: plainObject.isAnyPlainObject,
  regexp: regexp.isAnyRegExp,
  set: set.isAnySet,
  string: string.isAnyString,
  symbol: symbol.isAnySymbol,
  typedArray: typedArray.isAnyTypedArray,
  undefined: undef.isAnyUndefined
};

export const not = {
  arguments: args.isNotArguments,
  array: array.isNotArray,
  boolean: boolean.isNotBoolean,
  char: char.isNotChar,
  date: date.isNotDate,
  decimal: decimal.isNotDecimal,
  error: error.isNotError,
  function: func.isNotFunction,
  generator: generator.isNotGenerator,
  integer: integer.isNotInteger,
  json: json.isNotJson,
  map: map.isNotMap,
  nan: nan.isNotNaN,
  null: nul.isNotNull,
  number: number.isNotNumber,
  object: object.isNotObject,
  plainObject: plainObject.isNotPlainObject,
  regexp: regexp.isNotRegExp,
  sameType: sameType.isNotSameType,
  set: set.isNotSet,
  string: string.isNotString,
  symbol: symbol.isNotSymbol,
  typedArray: typedArray.isNotTypedArray,
  undefined: undef.isNotUndefined
};

export default {
  arguments: args.default,
  array: array.default,
  boolean: boolean.default,
  char: char.default,
  date: date.default,
  decimal: decimal.default,
  error: error.default,
  function: func.default,
  generator: generator.default,
  integer: integer.default,
  json: json.default,
  map: map.default,
  nan: nan.default,
  null: nul.default,
  number: number.default,
  object: object.default,
  plainObject: plainObject.default,
  regexp: regexp.default,
  sameType: sameType.default,
  set: set.default,
  string: string.default,
  symbol: symbol.default,
  typedArray: typedArray.default,
  undefined: undef.default
};
