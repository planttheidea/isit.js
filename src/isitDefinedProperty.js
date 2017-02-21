// types
import isitNull from './isitNull';
import isitObject from './isitObject';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

const isitDefinedProperty = (object, property) => {
  return isitObject(object) && !isitNull(object) && object.hasOwnProperty(property);
};

export const isitNotDefinedProperty = createIsNotMethod(isitDefinedProperty);

export default isitDefinedProperty;
