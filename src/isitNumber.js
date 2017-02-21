// types
import isitNaN from './isitNaN';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitNumber = (object) => {
  return !isitNaN(object) && typeof object === 'number';
};

export const isitAllNumber = createIsAllMethod(isitNumber);
export const isitNotNumber = createIsNotMethod(isitNumber);
export const isitAnyNumber = createIsAnyMethod(isitNumber);

export default isitNumber;
