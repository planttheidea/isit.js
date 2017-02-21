// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitUpperCase = (object) => {
  return isitString(object) && object === object.toUpperCase();
};

export const isitAllUpperCase = createIsAllMethod(isitUpperCase);
export const isitAnyUpperCase = createIsAnyMethod(isitUpperCase);
export const isitNotUpperCase = createIsNotMethod(isitUpperCase);

export default isitUpperCase;
