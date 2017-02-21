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

const isitEmail = createRegExpTest(EMAIL_ADDRESS_REGEXP);

export const isitAllEmail = createIsAllMethod(isitEmail);
export const isitAnyEmail = createIsAnyMethod(isitEmail);
export const isitNotEmail = createIsNotMethod(isitEmail);

export default isitEmail;
