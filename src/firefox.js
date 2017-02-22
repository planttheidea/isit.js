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

const isFirefox = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isFirefoxTest(userAgent);
};

export const isAllFirefox = createIsAllMethod(isFirefox);
export const isAnyFirefox = createIsAnyMethod(isFirefox);
export const isNotFirefox = createIsNotMethod(isFirefox);

export default isFirefox;
