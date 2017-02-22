// types
import {
  isAllDate
} from './date';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isSameDate = (object, date) => {
  if (!isAllDate(object, date)) {
      return false;
  }

  return object.toDateString() === date.toDateString();
};

export const isNotSameDate = createIsNotMethod(isSameDate);

export default isSameDate;
