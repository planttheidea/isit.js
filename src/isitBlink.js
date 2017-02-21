// constants
import {
  CHROME_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import {
  isitNotEdge
} from './isitEdge';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isChromeTest = createRegExpTest(CHROME_REGEXP);

const isitBlink = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isChromeTest(userAgent) && isitNotEdge({userAgent});
};

export const isitAllBlink = createIsAllMethod(isitBlink);
export const isitAnyBlink = createIsAnyMethod(isitBlink);
export const isitNotBlink = createIsNotMethod(isitBlink);

export default isitBlink;
