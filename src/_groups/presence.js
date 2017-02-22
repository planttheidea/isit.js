// presence
import * as empty from '../empty';
import * as existy from '../existy';
import * as falsy from '../falsy';
import * as truthy from '../truthy';
import * as whitespace from '../whitespace';

export const all = {
  empty: empty.isAllEmpty,
  existy: existy.isAllExisty,
  falsy: falsy.isAllFalsy,
  truthy: truthy.isAllTruthy,
  whitespace: whitespace.isAllWhitespace
};

export const any = {
  empty: empty.isAnyEmpty,
  existy: existy.isAnyExisty,
  falsy: falsy.isAnyFalsy,
  truthy: truthy.isAnyTruthy,
  whitespace: whitespace.isAnyWhitespace
};

export const not = {
  empty: empty.isNotEmpty,
  existy: existy.isNotExisty,
  falsy: falsy.isNotFalsy,
  truthy: truthy.isNotTruthy,
  whitespace: whitespace.isNotWhitespace
};

export default {
  empty: empty.default,
  existy: existy.default,
  falsy: falsy.default,
  truthy: truthy.default,
  whitespace: whitespace.default
};
