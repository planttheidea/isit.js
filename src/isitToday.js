// types
import isitSameDate from './isitSameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitToday = (object) => {
  return isitSameDate(object, new Date());
};

export const isitAllToday = createIsAllMethod(isitToday);
export const isitAnyToday = createIsAnyMethod(isitToday);
export const isitNotToday = createIsNotMethod(isitToday);

export default isitToday;
