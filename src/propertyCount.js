// types
import isNull from './null';
import isNumber from './number';
import isObject from './object';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isPropertyCount = (object, count) => {
  if (!isObject(object) || isNull(object) || !isNumber(count)) {
    return false;
  }

  return Object.keys(object).length === count;
};

export const isNotPropertyCount = createIsNotMethod(isPropertyCount);

export default isPropertyCount;
