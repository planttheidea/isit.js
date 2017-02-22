// constants
import {
  GECKO_REGEXP,
  LIKE_GECKO_REGEXP,
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

const isGeckoTest = createRegExpTest(GECKO_REGEXP);
const isLikeGeckoTest = createRegExpTest(LIKE_GECKO_REGEXP);

const isGecko = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isGeckoTest(userAgent) && !isLikeGeckoTest(userAgent);
};

export const isAllGecko = createIsAllMethod(isGecko);
export const isAnyGecko = createIsAnyMethod(isGecko);
export const isNotGecko = createIsNotMethod(isGecko);

export default isGecko;
