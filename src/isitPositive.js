// types
import isitNumber from './isitNumber';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitPositive = (object) => {
  return isitNumber(object) && object > 0;
};

export const isitAllPositive = createIsAllMethod(isitPositive);
export const isitNotPositive = createIsNotMethod(isitPositive);
export const isitAnyPositive = createIsAnyMethod(isitPositive);

export default isitPositive;
