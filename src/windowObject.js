// types
import isNull from './null';
import isObject from './object';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isWindowObject = (object) => {
  return isObject(object) && !isNull(object) && object.window === object;
};

export const isAllWindowObject = createIsAllMethod(isWindowObject);
export const isNotWindowObject = createIsNotMethod(isWindowObject);
export const isAnyWindowObject = createIsAnyMethod(isWindowObject);

export default isWindowObject;
