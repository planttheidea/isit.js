// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

const isitTypedArray = (object) => {
  const objectToString = toString(object);

  return objectToString === getObjectClass('Int8Array')
    || objectToString === getObjectClass('Uint8Array')
    || objectToString === getObjectClass('Uint8ClampedArray')
    || objectToString === getObjectClass('Int16Array')
    || objectToString === getObjectClass('Uint16Array')
    || objectToString === getObjectClass('Int32Array')
    || objectToString === getObjectClass('Uint32Array')
    || objectToString === getObjectClass('Float32Array')
    || objectToString === getObjectClass('Float64Array');
};

export const isitAllTypedArray = createIsAllMethod(isitTypedArray);
export const isitNotTypedArray = createIsNotMethod(isitTypedArray);
export const isitAnyTypedArray = createIsAnyMethod(isitTypedArray);

export default isitTypedArray;
