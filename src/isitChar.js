// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

// types
import isitString from './isitString';

const isitChar = (object) => {
  return isitString(object) && object.length === 1;
};

export const isitAllChar = createIsAllMethod(isitChar);
export const isitNotChar = createIsNotMethod(isitChar);
export const isitAnyChar = createIsAnyMethod(isitChar);

export default isitChar;
