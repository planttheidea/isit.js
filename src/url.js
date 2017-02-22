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

const isUrl = createRegExpTest(URL_REGEXP);

export const isAllUrl = createIsAllMethod(isUrl);
export const isAnyUrl = createIsAnyMethod(isUrl);
export const isNotUrl = createIsNotMethod(isUrl);

export default isUrl;
