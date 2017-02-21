// types
import {
  isitAllDate
} from './isitDate';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitSameDate = (object, day) => {
  if (!isitAllDate(object, day)) {
      return false;
  }

  return object.toDateString() === day.toDateString();
};

export const isitNotSameDate = createIsNotMethod(isitSameDate);

export default isitSameDate;
