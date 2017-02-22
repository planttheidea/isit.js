// types
import {
  isAllDate
} from './date';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isSameDay = (object, date) => {
  return isAllDate(object, date) && object.getDay() === date.getDay();
};

export const isNotSameDay = createIsNotMethod(isSameDay);

export default isSameDay;
