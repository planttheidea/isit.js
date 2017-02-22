// types
import isDate from './date';
import isNumber from './number';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isLeapYear = (object) => {
  const year = isDate(object) ? object.getFullYear() : object;

  return isNumber(year) && ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0);
};

export const isAllLeapYear = createIsAllMethod(isLeapYear);
export const isAnyLeapYear = createIsAnyMethod(isLeapYear);
export const isNotLeapYear = createIsNotMethod(isLeapYear);

export default isLeapYear;
