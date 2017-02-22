// types
import isDate from './date';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isWeekend = (object) => {
  if (!isDate(object)) {
    return false;
  }

  const day = object.getDay();

  return day === 0 || day === 6;
};

export const isAllWeekend = createIsAllMethod(isWeekend);
export const isAnyWeekend = createIsAnyMethod(isWeekend);
export const isNotWeekend = createIsNotMethod(isWeekend);

export default isWeekend;
