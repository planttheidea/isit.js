// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitEven = (object) => {
  return isitNumber(object) && object % 2 === 0;
};

export const isitAllEven = createIsAllMethod(isitEven);
export const isitNotEven = createIsNotMethod(isitEven);
export const isitAnyEven = createIsAnyMethod(isitEven);

export default isitEven;
