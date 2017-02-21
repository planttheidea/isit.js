// presence
import * as empty from './isitEmpty';
import * as existy from './isitExisty';
import * as falsy from './isitFalsy';
import * as truthy from './isitTruthy';
import * as whitespace from './isitWhitespace';

export const all = {
  empty: empty.isitAllEmpty,
  existy: existy.isitAllExisty,
  falsy: falsy.isitAllFalsy,
  truthy: truthy.isitAllTruthy,
  whitespace: whitespace.isitAllWhitespace
};

export const any = {
  empty: empty.isitAnyEmpty,
  existy: existy.isitAnyExisty,
  falsy: falsy.isitAnyFalsy,
  truthy: truthy.isitAnyTruthy,
  whitespace: whitespace.isitAnyWhitespace
};

export const not = {
  empty: empty.isitNotEmpty,
  existy: existy.isitNotExisty,
  falsy: falsy.isitNotFalsy,
  truthy: truthy.isitNotTruthy,
  whitespace: whitespace.isitNotWhitespace
};

export default {
  empty: empty.default,
  existy: existy.default,
  falsy: falsy.default,
  truthy: truthy.default,
  whitespace: whitespace.default
};
