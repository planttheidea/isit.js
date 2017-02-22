// types
import {
  isNotExisty
} from './existy';
import isFunction from './function';
import isObject from './object';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isJquery = (object) => {
  if (isNotExisty(object)) {
    return false;
  }

  if (isFunction(object)) {
    const $object = object();

    return isObject($object) && !!$object.jquery;
  }

  return !!Object.getPrototypeOf(object).jquery;
};

export const isAllJquery = createIsAllMethod(isJquery);
export const isNotJquery = createIsNotMethod(isJquery);
export const isAnyJquery = createIsAnyMethod(isJquery);

export default isJquery;
