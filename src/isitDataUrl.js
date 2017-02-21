// constants
import {
  DATA_URL_REGEXP
} from './_internal/stringConstants';

// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isDataUrlTest = createRegExpTest(DATA_URL_REGEXP);

const isitDataUrl = (object) => {
  return isitString(object) && isDataUrlTest(object);
};

export const isitAllDataUrl = createIsAllMethod(isitDataUrl);
export const isitAnyDataUrl = createIsAnyMethod(isitDataUrl);
export const isitNotDataUrl = createIsNotMethod(isitDataUrl);

export default isitDataUrl;
