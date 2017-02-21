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

const isitInLastMonth = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneMonthAgo = new Date(today).setMonth(today.getMonth() - 1);

  return isitInDateRange(object, oneMonthAgo, today);
};

export const isitAllInLastMonth = createIsAllMethod(isitInLastMonth);
export const isitAnyInLastMonth = createIsAnyMethod(isitInLastMonth);
export const isitNotInLastMonth = createIsNotMethod(isitInLastMonth);

export default isitInLastMonth;
