// constants
import {
  DATA_URL_REGEXP
} from './_internal/stringConstants';

// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isDataUrlTest = createRegExpTest(DATA_URL_REGEXP);

const isDataUrl = (object) => {
  return isString(object) && isDataUrlTest(object);
};

export const isAllDataUrl = createIsAllMethod(isDataUrl);
export const isAnyDataUrl = createIsAnyMethod(isDataUrl);
export const isNotDataUrl = createIsNotMethod(isDataUrl);

export default isDataUrl;
