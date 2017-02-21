// types
import * as args from './isitArguments';
import * as array from './isitArray';
import * as boolean from './isitBoolean';
import * as char from './isitChar';
import * as date from './isitDate';
import * as decimal from './isitDecimal';
import * as error from './isitError';
import * as func from './isitFunction';
import * as generator from './isitGenerator';
import * as integer from './isitInteger';
import * as json from './isitJson';
import * as map from './isitMap';
import * as nan from './isitNaN';
import * as nul from './isitNull';
import * as number from './isitNumber';
import * as object from './isitObject';
import * as plainObject from './isitPlainObject';
import * as regexp from './isitRegExp';
import * as sameType from './isitSameType';
import * as set from './isitSet';
import * as string from './isitString';
import * as symbol from './isitSymbol';
import * as typedArray from './isitTypedArray';
import * as undef from './isitUndefined';

export const all = {
  arguments: args.isitAllArguments,
  array: array.isitAllArray,
  boolean: boolean.isitAllBoolean,
  char: char.isitAllChar,
  date: date.isitAllDate,
  decimal: decimal.isitAllDecimal,
  error: error.isitAllError,
  function: func.isitAllFunction,
  generator: generator.isitAllGenerator,
  integer: integer.isitAllInteger,
  json: json.isitAllJson,
  map: map.isitAllMap,
  nan: nan.isitAllNaN,
  null: nul.isitAllNull,
  number: number.isitAllNumber,
  object: object.isitAllObject,
  plainObject: plainObject.isitAllPlainObject,
  regexp: regexp.isitAllRegExp,
  set: set.isitAllSet,
  string: string.isitAllString,
  symbol: symbol.isitAllSymbol,
  typedArray: typedArray.isitAllTypedArray,
  undefined: undef.isitAllUndefined
};

export const any = {
  arguments: args.isitAnyArguments,
  array: array.isitAnyArray,
  boolean: boolean.isitAnyBoolean,
  char: char.isitAnyChar,
  date: date.isitAnyDate,
  decimal: decimal.isitAnyDecimal,
  error: error.isitAnyError,
  function: func.isitAnyFunction,
  generator: generator.isitAnyGenerator,
  integer: integer.isitAnyInteger,
  json: json.isitAnyJson,
  map: map.isitAnyMap,
  nan: nan.isitAnyNaN,
  null: nul.isitAnyNull,
  number: number.isitAnyNumber,
  object: object.isitAnyObject,
  plainObject: plainObject.isitAnyPlainObject,
  regexp: regexp.isitAnyRegExp,
  set: set.isitAnySet,
  string: string.isitAnyString,
  symbol: symbol.isitAnySymbol,
  typedArray: typedArray.isitAnyTypedArray,
  undefined: undef.isitAnyUndefined
};

export const not = {
  arguments: args.isitNotArguments,
  array: array.isitNotArray,
  boolean: boolean.isitNotBoolean,
  char: char.isitNotChar,
  date: date.isitNotDate,
  decimal: decimal.isitNotDecimal,
  error: error.isitNotError,
  function: func.isitNotFunction,
  generator: generator.isitNotGenerator,
  integer: integer.isitNotInteger,
  json: json.isitNotJson,
  map: map.isitNotMap,
  nan: nan.isitNotNaN,
  null: nul.isitNotNull,
  number: number.isitNotNumber,
  object: object.isitNotObject,
  plainObject: plainObject.isitNotPlainObject,
  regexp: regexp.isitNotRegExp,
  sameType: sameType.isitNotSameType,
  set: set.isitNotSet,
  string: string.isitNotString,
  symbol: symbol.isitNotSymbol,
  typedArray: typedArray.isitNotTypedArray,
  undefined: undef.isitNotUndefined
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
