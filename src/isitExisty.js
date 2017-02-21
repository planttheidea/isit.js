// types
import isitNull from './isitNull';
import isitUndefined from './isitUndefined';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitExisty = (object) => {
  return !isitNull(object) && !isitUndefined(object);
};

export const isitAllExisty = createIsAllMethod(isitExisty);
export const isitNotExisty = createIsNotMethod(isitExisty);
export const isitAnyExisty = createIsAnyMethod(isitExisty);

export default isitExisty;
