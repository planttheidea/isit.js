// types
import isitSameDate from './isitSameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitTomorrow = (object) => {
  const today = new Date();

  return isitSameDate(object, new Date(today.setDate(today.getDate() + 1)));
};

export const isitAllTomorrow = createIsAllMethod(isitTomorrow);
export const isitAnyTomorrow = createIsAnyMethod(isitTomorrow);
export const isitNotTomorrow = createIsNotMethod(isitTomorrow);

export default isitTomorrow;
