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

const isEppPhone = createRegExpTest(EPP_PHONE_REGEXP);

export const isAllEppPhone = createIsAllMethod(isEppPhone);
export const isAnyEppPhone = createIsAnyMethod(isEppPhone);
export const isNotEppPhone = createIsNotMethod(isEppPhone);

export default isEppPhone;
