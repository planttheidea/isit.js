// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitNegative = (object) => {
  return isitNumber(object) && object < 0;
};

export const isitAllNegative = createIsAllMethod(isitNegative);
export const isitNotNegative = createIsNotMethod(isitNegative);
export const isitAnyNegative = createIsAnyMethod(isitNegative);

export default isitNegative;
