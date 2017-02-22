// types
import {
  isAllDate
} from './date';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isSameYear = (object, date) => {
  return isAllDate(object, date) && object.getFullYear() === date.getFullYear();
};

export const isNotSameYear = createIsNotMethod(isSameYear);

export default isSameYear;
