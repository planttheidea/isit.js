// types
import isitDate from './isitDate';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isitPast = (object) => {
  return isitDate(object) && object.valueOf() < Date.now();
};

export const isitAllPast = createIsAllMethod(isitPast);
export const isitAnyPast = createIsAnyMethod(isitPast);
export const isitNotPast = createIsNotMethod(isitPast);

export default isitPast;
