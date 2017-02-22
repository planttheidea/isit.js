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

const isInLastWeek = (object) => {
  if (!isDate(object)) {
      return false;
  }

  const today = new Date();
  const oneWeekAgo = new Date(new Date(today).setDate(today.getDate() - 7));

  return isInDateRange(object, oneWeekAgo, today);
};

export const isAllInLastWeek = createIsAllMethod(isInLastWeek);
export const isAnyInLastWeek = createIsAnyMethod(isInLastWeek);
export const isNotInLastWeek = createIsNotMethod(isInLastWeek);

export default isInLastWeek;
