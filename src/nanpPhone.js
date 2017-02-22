// constants
import {
  NANP_PHONE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isNanpPhone = createRegExpTest(NANP_PHONE_REGEXP);

export const isAllNanpPhone = createIsAllMethod(isNanpPhone);
export const isAnyNanpPhone = createIsAnyMethod(isNanpPhone);
export const isNotNanpPhone = createIsNotMethod(isNanpPhone);

export default isNanpPhone;
