// types
import isNull from './null';
import isObject from './object';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isDefinedProperty = (object, property) => {
  return isObject(object) && !isNull(object) && object.hasOwnProperty(property);
};

export const isNotDefinedProperty = createIsNotMethod(isDefinedProperty);

export default isDefinedProperty;
