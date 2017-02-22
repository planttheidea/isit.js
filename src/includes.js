// types
import isArray from './array';
import isString from './string';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isIncludes = (object, item) => {
  return (isArray(object) || (isString(object) && isString(item))) && !!~object.indexOf(item);
};

export const isNotIncludes = createIsNotMethod(isIncludes);

export default isIncludes;
