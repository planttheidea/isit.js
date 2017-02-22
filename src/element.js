// types
import {
  isNotNull
} from './null';
import isObject from './object';
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isElement = (object) => {
  return typeof HTMLElement === 'object' ? object instanceof HTMLElement :
    isObject(object) && isNotNull(object) && object.nodeType === 1 && isString(object.nodeName);
};

export const isAllElement = createIsAllMethod(isElement);
export const isNotElement = createIsNotMethod(isElement);
export const isAnyElement = createIsAnyMethod(isElement);

export default isElement;
