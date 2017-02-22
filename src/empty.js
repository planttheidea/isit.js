// presence
import isWhitespace from './whitespace';

// types
import isArguments from './arguments';
import isArray from './array';
import isMap from './map';
import isNull from './null';
import isObject from './object';
import isRegExp from './regexp';
import isSet from './set';
import isUndefined from './undefined';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isEmpty = (object) => {
  if (isUndefined(object) || isNull(object)) {
    return true;
  }

  if (isArray(object) || isArguments(object)) {
    return object.length === 0;
  }

  if (isMap(object) || isSet(object)) {
    return object.size === 0;
  }

  if (isRegExp(object)) {
    const objectString = object.toString();

    return objectString === '/(?:)/' || objectString === '//';
  }

  if (isObject(object)) {
    return Object.keys(object).length === 0;
  }

  return isWhitespace(object) || `${object}` === '';
};

export const isAllEmpty = createIsAllMethod(isEmpty);
export const isNotEmpty = createIsNotMethod(isEmpty);
export const isAnyEmpty = createIsAnyMethod(isEmpty);

export default isEmpty;
