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

const isitNanpPhone = createRegExpTest(NANP_PHONE_REGEXP);

export const isitAllNanpPhone = createIsAllMethod(isitNanpPhone);
export const isitAnyNanpPhone = createIsAnyMethod(isitNanpPhone);
export const isitNotNanpPhone = createIsNotMethod(isitNanpPhone);

export default isitNanpPhone;
