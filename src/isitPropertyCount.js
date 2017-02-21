// types
import isitNull from './isitNull';
import isitNumber from './isitNumber';
import isitObject from './isitObject';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitPropertyCount = (object, count) => {
  if (!isitObject(object) || isitNull(object) || !isitNumber(count)) {
    return false;
  }

  return Object.keys(object).length === count;
};

export const isitNotPropertyCount = createIsNotMethod(isitPropertyCount);

export default isitPropertyCount;
