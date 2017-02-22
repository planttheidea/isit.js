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

const isInLastYear = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneYearAgo = new Date(new Date(today).setFullYear(today.getFullYear() - 1));

  return isInDateRange(object, oneYearAgo, today);
};

export const isAllInLastYear = createIsAllMethod(isInLastYear);
export const isAnyInLastYear = createIsAnyMethod(isInLastYear);
export const isNotInLastYear = createIsNotMethod(isInLastYear);

export default isInLastYear;
