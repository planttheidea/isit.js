// constants
import {
  NAVIGATOR,
  TRIDENT_REGEXP,
  USER_AGENT
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isTridentTest = createRegExpTest(TRIDENT_REGEXP);

const isTrident = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isTridentTest(userAgent);
};

export const isAllTrident = createIsAllMethod(isTrident);
export const isAnyTrident = createIsAnyMethod(isTrident);
export const isNotTrident = createIsNotMethod(isTrident);

export default isTrident;
