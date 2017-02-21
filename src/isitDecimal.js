// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitDecimal = (object) => {
  return isitNumber(object) && object % 1 !== 0;
};

export const isitAllDecimal = createIsAllMethod(isitDecimal);
export const isitNotDecimal = createIsNotMethod(isitDecimal);
export const isitAnyDecimal = createIsAnyMethod(isitDecimal);

export default isitDecimal;
