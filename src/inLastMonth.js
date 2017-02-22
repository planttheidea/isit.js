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

const isInLastMonth = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneMonthAgo = new Date(new Date(today).setMonth(today.getMonth() - 1));

  return isInDateRange(object, oneMonthAgo, today);
};

export const isAllInLastMonth = createIsAllMethod(isInLastMonth);
export const isAnyInLastMonth = createIsAnyMethod(isInLastMonth);
export const isNotInLastMonth = createIsNotMethod(isInLastMonth);

export default isInLastMonth;
