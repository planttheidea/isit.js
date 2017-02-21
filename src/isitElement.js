// types
import {
  isitNotNull
} from './isitNull';
import isitObject from './isitObject';
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitElement = (object) => {
  return typeof HTMLElement === 'object' ? object instanceof HTMLElement :
    isitObject(object) && isitNotNull(object) && object.nodeType === 1 && isitString(object.nodeName);
};

export const isitAllElement = createIsAllMethod(isitElement);
export const isitNotElement = createIsNotMethod(isitElement);
export const isitAnyElement = createIsAnyMethod(isitElement);

export default isitElement;
