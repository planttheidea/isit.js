// constants
import {
  EPP_PHONE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitEppPhone = createRegExpTest(EPP_PHONE_REGEXP);

export const isitAllEppPhone = createIsAllMethod(isitEppPhone);
export const isitAnyEppPhone = createIsAnyMethod(isitEppPhone);
export const isitNotEppPhone = createIsNotMethod(isitEppPhone);

export default isitEppPhone;
