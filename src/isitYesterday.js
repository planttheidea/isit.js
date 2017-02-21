// types
import isitSameDate from './isitSameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitYesterday = (object) => {
  const today = new Date();

  return isitSameDate(object, new Date(today.setDate(today.getDate() - 1)));
};

export const isitAllYesterday = createIsAllMethod(isitYesterday);
export const isitAnyYesterday = createIsAnyMethod(isitYesterday);
export const isitNotYesterday = createIsNotMethod(isitYesterday);

export default isitYesterday;
