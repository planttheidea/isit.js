// constants
import {
  CA_POSTAL_CODE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isCaPostalCode = createRegExpTest(CA_POSTAL_CODE_REGEXP);

export const isAllCaPostalCode = createIsAllMethod(isCaPostalCode);
export const isAnyCaPostalCode = createIsAnyMethod(isCaPostalCode);
export const isNotCaPostalCode = createIsNotMethod(isCaPostalCode);

export default isCaPostalCode;
