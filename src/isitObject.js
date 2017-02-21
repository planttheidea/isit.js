// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitObject = (object) => {
  return typeof object === 'object';
};

export const isitAllObject = createIsAllMethod(isitObject);
export const isitNotObject = createIsNotMethod(isitObject);
export const isitAnyObject = createIsAnyMethod(isitObject);

export default isitObject;
