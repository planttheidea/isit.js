// constants
import {
  SOCIAL_SECURITY_NUMBER_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitSocialSecurityNumber = createRegExpTest(SOCIAL_SECURITY_NUMBER_REGEXP);

export const isitAllSocialSecurityNumber = createIsAllMethod(isitSocialSecurityNumber);
export const isitAnySocialSecurityNumber = createIsAnyMethod(isitSocialSecurityNumber);
export const isitNotSocialSecurityNumber = createIsNotMethod(isitSocialSecurityNumber);

export default isitSocialSecurityNumber;
