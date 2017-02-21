// types
import isitFunction from './isitFunction';
import isitObject from './isitObject';

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
  return isitObject(object) && toString(object) === getObjectClass('Object');
};

const isitPlainObject = (object) => {
  if (!isStandardObject(object)) {
    return false;
  }

  const constructor = object.constructor;

  // test if the contructor has been modified
  if (!isitFunction(constructor)) {
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

export const isitAllPlainObject = createIsAllMethod(isitPlainObject);
export const isitNotPlainObject = createIsNotMethod(isitPlainObject);
export const isitAnyPlainObject = createIsAnyMethod(isitPlainObject);

export default isitPlainObject;
