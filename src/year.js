// types
import isDate from './date';
import isNumber from './number';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isYear = (object, year) => {
  const yearNumber = +year;

  return isDate(object) && isNumber(yearNumber) && yearNumber === object.getFullYear();
};

export const isNotYear = createIsNotMethod(isYear);

export default isYear;
