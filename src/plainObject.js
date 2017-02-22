// types
import isFunction from './function';
import isObject from './object';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

const isStandardObject = (object) => {
  return isObject(object) && toString(object) === getObjectClass('Object');
};

const isPlainObject = (object) => {
  if (!isStandardObject(object)) {
    return false;
  }

  const constructor = object.constructor;

  // test if the contructor has been modified
  if (!isFunction(constructor)) {
    return false;
  }

  const prototype = Object.getPrototypeOf(object);

  // test if prototype does not include a normal object property
  if (!isStandardObject(prototype) || !prototype.hasOwnProperty('isPrototypeOf')) {
    return false;
  }

  // it is likely an object
  return true;
};

export const isAllPlainObject = createIsAllMethod(isPlainObject);
export const isNotPlainObject = createIsNotMethod(isPlainObject);
export const isAnyPlainObject = createIsAnyMethod(isPlainObject);

export default isPlainObject;
