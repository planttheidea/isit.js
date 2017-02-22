// types
import {
  isAllString
} from './string';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isEndsWith = (object, endingString) => {
  if (!isAllString(object, endingString)) {
    return false;
  }

  const index = object.lastIndexOf(endingString);

  return ~index && index === object.length - endingString.length;
};

export const isNotEndsWith = createIsNotMethod(isEndsWith);

export default isEndsWith;
