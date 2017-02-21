// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  toStartCase
} from './_internal/stringUtils';

const isitStartCase = (object) => {
  return isitString(object) && object === toStartCase(object);
};

export const isitAllStartCase = createIsAllMethod(isitStartCase);
export const isitAnyStartCase = createIsAnyMethod(isitStartCase);
export const isitNotStartCase = createIsNotMethod(isitStartCase);

export default isitStartCase;
