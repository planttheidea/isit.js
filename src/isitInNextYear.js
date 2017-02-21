// time
import isitInDateRange from './isitInDateRange';

// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitInNextYear = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneYearFromNow = new Date(today).setFullYear(today.getFullYear() + 1);

  return isitInDateRange(object, today, oneYearFromNow);
};

export const isitAllInNextYear = createIsAllMethod(isitInNextYear);
export const isitAnyInNextYear = createIsAnyMethod(isitInNextYear);
export const isitNotInNextYear = createIsNotMethod(isitInNextYear);

export default isitInNextYear;
