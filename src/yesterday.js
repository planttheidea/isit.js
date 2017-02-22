// types
import isSameDate from './sameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isYesterday = (object) => {
  const today = new Date();

  return isSameDate(object, new Date(today.setDate(today.getDate() - 1)));
};

export const isAllYesterday = createIsAllMethod(isYesterday);
export const isAnyYesterday = createIsAnyMethod(isYesterday);
export const isNotYesterday = createIsNotMethod(isYesterday);

export default isYesterday;
