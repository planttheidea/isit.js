// constants
import {
  URL_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitUrl = createRegExpTest(URL_REGEXP);

export const isitAllUrl = createIsAllMethod(isitUrl);
export const isitAnyUrl = createIsAnyMethod(isitUrl);
export const isitNotUrl = createIsNotMethod(isitUrl);

export default isitUrl;
