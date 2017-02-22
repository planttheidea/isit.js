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

const isInNextWeek = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneWeekFromNow = new Date(new Date(today).setDate(today.getDate() + 7));

  return isInDateRange(object, today, oneWeekFromNow);
};

export const isAllInNextWeek = createIsAllMethod(isInNextWeek);
export const isAnyInNextWeek = createIsAnyMethod(isInNextWeek);
export const isNotInNextWeek = createIsNotMethod(isInNextWeek);

export default isInNextWeek;
