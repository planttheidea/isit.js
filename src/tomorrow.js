// types
import isSameDate from './sameDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isTomorrow = (object) => {
  const today = new Date();

  return isSameDate(object, new Date(today.setDate(today.getDate() + 1)));
};

export const isAllTomorrow = createIsAllMethod(isTomorrow);
export const isAnyTomorrow = createIsAnyMethod(isTomorrow);
export const isNotTomorrow = createIsNotMethod(isTomorrow);

export default isTomorrow;
