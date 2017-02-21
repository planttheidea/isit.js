// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitWeekend = (object) => {
  if (!isitDate(object)) {
    return false;
  }

  const day = object.getDay();

  return day === 0 && day === 6;
};

export const isitAllWeekend = createIsAllMethod(isitWeekend);
export const isitAnyWeekend = createIsAnyMethod(isitWeekend);
export const isitNotWeekend = createIsNotMethod(isitWeekend);

export default isitWeekend;
