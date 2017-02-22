// time
import isInDateRange from './inDateRange';

// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isInNextYear = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneYearFromNow = new Date(new Date(today).setFullYear(today.getFullYear() + 1));

  return isInDateRange(object, today, oneYearFromNow);
};

export const isAllInNextYear = createIsAllMethod(isInNextYear);
export const isAnyInNextYear = createIsAnyMethod(isInNextYear);
export const isNotInNextYear = createIsNotMethod(isInNextYear);

export default isInNextYear;
