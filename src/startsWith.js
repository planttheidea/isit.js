// types
import {
  isAllString
} from './string';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isStartsWith = (object, startingString) => {
  return isAllString(object, startingString) && object.indexOf(startingString) === 0;
};

export const isNotStartsWith = createIsNotMethod(isStartsWith);

export default isStartsWith;
