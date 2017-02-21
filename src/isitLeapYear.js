// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitLeapYear = (object) => {
  return isitNumber(object) && ((object % 4 === 0 && object % 100 !== 0) || object % 400 === 0);
};

export const isitAllLeapYear = createIsAllMethod(isitLeapYear);
export const isitAnyLeapYear = createIsAnyMethod(isitLeapYear);
export const isitNotLeapYear = createIsNotMethod(isitLeapYear);

export default isitLeapYear;
