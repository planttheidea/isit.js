// constants
import {
  ISO_DATE_STRING_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isIsoDateString = createRegExpTest(ISO_DATE_STRING_REGEXP);

export const isAllIsoDateString = createIsAllMethod(isIsoDateString);
export const isAnyIsoDateString = createIsAnyMethod(isIsoDateString);
export const isNotIsoDateString = createIsNotMethod(isIsoDateString);

export default isIsoDateString;
