// constants
import {
  US_ZIP_CODE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitUsZipCode = createRegExpTest(US_ZIP_CODE_REGEXP);

export const isitAllUsZipCode = createIsAllMethod(isitUsZipCode);
export const isitAnyUsZipCode = createIsAnyMethod(isitUsZipCode);
export const isitNotUsZipCode = createIsNotMethod(isitUsZipCode);

export default isitUsZipCode;
