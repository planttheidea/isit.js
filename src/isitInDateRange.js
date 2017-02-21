// types
import {
  isitAllDate
} from './isitDate';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitInDateRange = (object, minimumDate, maximumDate) => {
  if (!isitAllDate(object, minimumDate, maximumDate)) {
    return false;
  }

  const objectTime = object.getTime();

  return objectTime >= minimumDate.getTime() && objectTime <= maximumDate.getTime();
};

export const isitNotInDateRange = createIsNotMethod(isitInDateRange);

export default isitInDateRange;
