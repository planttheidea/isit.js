// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitOdd = (object) => {
  return isitNumber(object) && object % 2 === 1;
};

export const isitAllOdd = createIsAllMethod(isitOdd);
export const isitNotOdd = createIsNotMethod(isitOdd);
export const isitAnyOdd = createIsAnyMethod(isitOdd);

export default isitOdd;
