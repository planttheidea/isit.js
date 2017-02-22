// types
import isNaN from './nan';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isNumber = (object) => {
  return !isNaN(object) && typeof object === 'number';
};

export const isAllNumber = createIsAllMethod(isNumber);
export const isNotNumber = createIsNotMethod(isNumber);
export const isAnyNumber = createIsAnyMethod(isNumber);

export default isNumber;
