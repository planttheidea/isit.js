// presence
import isitWhitespace from './isitWhitespace';

// types
import isitArguments from './isitArguments';
import isitArray from './isitArray';
import isitMap from './isitMap';
import isitNull from './isitNull';
import isitObject from './isitObject';
import isitRegExp from './isitRegExp';
import isitSet from './isitSet';
import isitUndefined from './isitUndefined';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitEmpty = (object) => {
  if (isitUndefined(object) || isitNull(object)) {
    return true;
  }

  if (isitArray(object) || isitArguments(object)) {
    return object.length === 0;
  }

  if (isitMap(object) || isitSet(object)) {
    return object.size === 0;
  }

  if (isitRegExp(object)) {
    const objectString = object.toString();

    return objectString === '/(?:)/' || objectString === '//';
  }

  if (isitObject(object)) {
    return Object.keys(object).length === 0;
  }

  return isitWhitespace(object) || `${object}` === '';
};

export const isitAllEmpty = createIsAllMethod(isitEmpty);
export const isitNotEmpty = createIsNotMethod(isitEmpty);
export const isitAnyEmpty = createIsAnyMethod(isitEmpty);

export default isitEmpty;
