// types
import isNull from './null';
import isUndefined from './undefined';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isExisty = (object) => {
  return !isNull(object) && !isUndefined(object);
};

export const isAllExisty = createIsAllMethod(isExisty);
export const isNotExisty = createIsNotMethod(isExisty);
export const isAnyExisty = createIsAnyMethod(isExisty);

export default isExisty;
