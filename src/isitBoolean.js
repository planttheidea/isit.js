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

const isitBoolean = (object) => {
  return object === true || object === false || toString(object) === getObjectClass('Boolean');
};

export const isitAllBoolean = createIsAllMethod(isitBoolean);
export const isitNotBoolean = createIsNotMethod(isitBoolean);
export const isitAnyBoolean = createIsAnyMethod(isitBoolean);

export default isitBoolean;
