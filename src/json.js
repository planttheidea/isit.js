// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isJson = (object) => {
  try {
    JSON.parse(object);

    return true;
  } catch (e) {
    return false;
  }
};

export const isAllJson = createIsAllMethod(isJson);
export const isNotJson = createIsNotMethod(isJson);
export const isAnyJson = createIsAnyMethod(isJson);

export default isJson;
