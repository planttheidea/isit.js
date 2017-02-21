// type
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';
import {
  getObjectClass,
  toString
} from './_internal/typeUtils';

const isitDate = (object) => {
  return toString(object) === getObjectClass('Date');
};

export const isitAllDate = createIsAllMethod(isitDate);
export const isitNotDate = createIsNotMethod(isitDate);
export const isitAnyDate = createIsAnyMethod(isitDate);

export default isitDate;
