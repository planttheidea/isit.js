// types
import {
  isAllDate
} from './date';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isInDateRange = (object, minimumDate, maximumDate) => {
  if (!isAllDate(object, minimumDate, maximumDate)) {
    return false;
  }

  const objectTime = object.getTime();

  return objectTime >= minimumDate.getTime() && objectTime <= maximumDate.getTime();
};

export const isNotInDateRange = createIsNotMethod(isInDateRange);

export default isInDateRange;
