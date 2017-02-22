// constants
import {
  UK_POSTAL_CODE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isUkPostalCode = createRegExpTest(UK_POSTAL_CODE_REGEXP);

export const isAllUkPostalCode = createIsAllMethod(isUkPostalCode);
export const isAnyUkPostalCode = createIsAnyMethod(isUkPostalCode);
export const isNotUkPostalCode = createIsNotMethod(isUkPostalCode);

export default isUkPostalCode;
