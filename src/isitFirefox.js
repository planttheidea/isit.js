// constants
import {
  FIREFOX_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isFirefoxTest = createRegExpTest(FIREFOX_REGEXP);

const isitFirefox = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isFirefoxTest(userAgent);
};

export const isitAllFirefox = createIsAllMethod(isitFirefox);
export const isitAnyFirefox = createIsAnyMethod(isitFirefox);
export const isitNotFirefox = createIsNotMethod(isitFirefox);

export default isitFirefox;
