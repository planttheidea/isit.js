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

const isitIsoDateString = createRegExpTest(ISO_DATE_STRING_REGEXP);

export const isitAllIsoDateString = createIsAllMethod(isitIsoDateString);
export const isitAnyIsoDateString = createIsAnyMethod(isitIsoDateString);
export const isitNotIsoDateString = createIsNotMethod(isitIsoDateString);

export default isitIsoDateString;
