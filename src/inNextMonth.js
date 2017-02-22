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

const isInNextMonth = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneMonthFromNow = new Date(new Date(today).setMonth(today.getMonth() + 1));

  return isInDateRange(object, today, oneMonthFromNow);
};

export const isAllInNextMonth = createIsAllMethod(isInNextMonth);
export const isAnyInNextMonth = createIsAnyMethod(isInNextMonth);
export const isNotInNextMonth = createIsNotMethod(isInNextMonth);

export default isInNextMonth;
