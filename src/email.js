// constants
import {
  EMAIL_ADDRESS_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isEmail = createRegExpTest(EMAIL_ADDRESS_REGEXP);

export const isAllEmail = createIsAllMethod(isEmail);
export const isAnyEmail = createIsAnyMethod(isEmail);
export const isNotEmail = createIsNotMethod(isEmail);

export default isEmail;
