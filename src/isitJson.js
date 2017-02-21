// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isitJson = (object) => {
  try {
    JSON.parse(object);

    return true;
  } catch (e) {
    return false;
  }
};

export const isitAllJson = createIsAllMethod(isitJson);
export const isitNotJson = createIsNotMethod(isitJson);
export const isitAnyJson = createIsAnyMethod(isitJson);

export default isitJson;
