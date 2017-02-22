// types
import {
  isAllDate
} from './date';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isSameMonth = (object, date) => {
  return isAllDate(object, date) && object.getMonth() === date.getMonth();
};

export const isNotSameMonth = createIsNotMethod(isSameMonth);

export default isSameMonth;
