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

const isitUkPostalCode = createRegExpTest(UK_POSTAL_CODE_REGEXP);

export const isitAllUkPostalCode = createIsAllMethod(isitUkPostalCode);
export const isitAnyUkPostalCode = createIsAnyMethod(isitUkPostalCode);
export const isitNotUkPostalCode = createIsNotMethod(isitUkPostalCode);

export default isitUkPostalCode;
