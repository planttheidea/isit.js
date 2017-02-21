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

const isitInNextWeek = (object) => {
  if (!isitDate(object)) {
      return false;
  }

  const today = new Date();
  const oneWeekFromNow = new Date(today).setDate(today.getDate() + 7);

  return isitInDateRange(object, oneWeekFromNow, today);
};

export const isitAllInNextWeek = createIsAllMethod(isitInNextWeek);
export const isitAnyInNextWeek = createIsAnyMethod(isitInNextWeek);
export const isitNotInNextWeek = createIsNotMethod(isitInNextWeek);

export default isitInNextWeek;
