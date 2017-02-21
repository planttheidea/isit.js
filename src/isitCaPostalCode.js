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

const isitCaPostalCode = createRegExpTest(CA_POSTAL_CODE_REGEXP);

export const isitAllCaPostalCode = createIsAllMethod(isitCaPostalCode);
export const isitAnyCaPostalCode = createIsAnyMethod(isitCaPostalCode);
export const isitNotCaPostalCode = createIsNotMethod(isitCaPostalCode);

export default isitCaPostalCode;
