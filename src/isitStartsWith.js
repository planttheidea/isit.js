// types
import {
  isitAllString
} from './isitString';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitStartsWith = (object, startingString) => {
  return isitAllString(object, startingString) && object.indexOf(startingString) === 0;
};

export const isitNotStartsWith = createIsNotMethod(isitStartsWith);

export default isitStartsWith;
