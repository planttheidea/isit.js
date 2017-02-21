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

const isitTrident = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isTridentTest(userAgent);
};

export const isitAllTrident = createIsAllMethod(isitTrident);
export const isitAnyTrident = createIsAnyMethod(isitTrident);
export const isitNotTrident = createIsNotMethod(isitTrident);

export default isitTrident;
