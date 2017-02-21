// types
import {
  isitAllString
} from './isitString';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitEndsWith = (object, endingString) => {
  if (!isitAllString(object, endingString)) {
    return false;
  }

  const index = object.lastIndexOf(endingString);

  return ~index && index === object.length - endingString.length;
};

export const isitNotEndsWith = createIsNotMethod(isitEndsWith);

export default isitEndsWith;
