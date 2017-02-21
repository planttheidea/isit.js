// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitError = (object) => {
  return object instanceof Error;
};

export const isitAllError = createIsAllMethod(isitError);
export const isitNotError = createIsNotMethod(isitError);
export const isitAnyError = createIsAnyMethod(isitError);

export default isitError;
