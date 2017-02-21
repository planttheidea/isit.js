// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitString = (object) => {
  return typeof object === 'string';
};

export const isitAllString = createIsAllMethod(isitString);
export const isitNotString = createIsNotMethod(isitString);
export const isitAnyString = createIsAnyMethod(isitString);

export default isitString;
