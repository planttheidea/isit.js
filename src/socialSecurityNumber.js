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

const isSocialSecurityNumber = createRegExpTest(SOCIAL_SECURITY_NUMBER_REGEXP);

export const isAllSocialSecurityNumber = createIsAllMethod(isSocialSecurityNumber);
export const isAnySocialSecurityNumber = createIsAnyMethod(isSocialSecurityNumber);
export const isNotSocialSecurityNumber = createIsNotMethod(isSocialSecurityNumber);

export default isSocialSecurityNumber;
