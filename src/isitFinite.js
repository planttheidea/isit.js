// constants
import {
  NEGATIVE_INFINITY,
  POSITIVE_INFINITY
} from './_internal/arithmeticConstants';

// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitFinite = (object) => {
  return isitNumber(object) && object !== NEGATIVE_INFINITY && object !== POSITIVE_INFINITY;
};

export const isitAllFinite = createIsAllMethod(isitFinite);
export const isitNotFinite = createIsNotMethod(isitFinite);
export const isitAnyFinite = createIsAnyMethod(isitFinite);

export default isitFinite;
