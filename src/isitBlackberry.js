// constants
import {
  BB10_REGEXP,
  BLACKBERRY_REGEXP,
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

const isBB10Test = createRegExpTest(BB10_REGEXP);
const isBlackberryTest = createRegExpTest(BLACKBERRY_REGEXP);

const isitBlackberry = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isBlackberryTest(userAgent) || isBB10Test(userAgent);
};

export const isitAllBlackberry = createIsAllMethod(isitBlackberry);
export const isitAnyBlackberry = createIsAnyMethod(isitBlackberry);
export const isitNotBlackberry = createIsNotMethod(isitBlackberry);

export default isitBlackberry;
