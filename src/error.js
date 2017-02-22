// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isError = (object) => {
  return object instanceof Error;
};

export const isAllError = createIsAllMethod(isError);
export const isNotError = createIsNotMethod(isError);
export const isAnyError = createIsAnyMethod(isError);

export default isError;
