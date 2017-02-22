// constants
import {
  CHROME_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import {
  isNotEdge
} from './edge';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isChromeTest = createRegExpTest(CHROME_REGEXP);

const isBlink = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isChromeTest(userAgent) && isNotEdge({userAgent});
};

export const isAllBlink = createIsAllMethod(isBlink);
export const isAnyBlink = createIsAnyMethod(isBlink);
export const isNotBlink = createIsNotMethod(isBlink);

export default isBlink;
