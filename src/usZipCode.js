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

const isUsZipCode = createRegExpTest(US_ZIP_CODE_REGEXP);

export const isAllUsZipCode = createIsAllMethod(isUsZipCode);
export const isAnyUsZipCode = createIsAnyMethod(isUsZipCode);
export const isNotUsZipCode = createIsNotMethod(isUsZipCode);

export default isUsZipCode;
