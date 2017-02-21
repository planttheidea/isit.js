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

const isitInLastYear = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneYearAgo = new Date(today).setFullYear(today.getFullYear() - 1);

  return isitInDateRange(object, oneYearAgo, today);
};

export const isitAllInLastYear = createIsAllMethod(isitInLastYear);
export const isitAnyInLastYear = createIsAnyMethod(isitInLastYear);
export const isitNotInLastYear = createIsNotMethod(isitInLastYear);

export default isitInLastYear;
