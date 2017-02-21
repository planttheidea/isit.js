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

const isitInNextMonth = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneMonthFromNow = new Date(today).setMonth(today.getMonth() + 1);

  return isitInDateRange(object, today, oneMonthFromNow);
};

export const isitAllInNextMonth = createIsAllMethod(isitInNextMonth);
export const isitAnyInNextMonth = createIsAnyMethod(isitInNextMonth);
export const isitNotInNextMonth = createIsNotMethod(isitInNextMonth);

export default isitInNextMonth;
