// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitLowerCase = (object) => {
  return isitString(object) && object === object.toLowerCase();
};

export const isitAllLowerCase = createIsAllMethod(isitLowerCase);
export const isitAnyLowerCase = createIsAnyMethod(isitLowerCase);
export const isitNotLowerCase = createIsNotMethod(isitLowerCase);

export default isitLowerCase;
