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

const isitInLastWeek = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneWeekAgo = new Date(today).setDate(today.getDate() - 7);

  return isitInDateRange(object, oneWeekAgo, today);
};

export const isitAllInLastWeek = createIsAllMethod(isitInLastWeek);
export const isitAnyInLastWeek = createIsAnyMethod(isitInLastWeek);
export const isitNotInLastWeek = createIsNotMethod(isitInLastWeek);

export default isitInLastWeek;
