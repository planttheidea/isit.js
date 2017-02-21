// constants
import {
  OPERA_LEGACY_REGEXP,
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

const isOperaLegacyTest = createRegExpTest(OPERA_LEGACY_REGEXP);

const isitPresto = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isOperaLegacyTest(userAgent);
};

export const isitAllPresto = createIsAllMethod(isitPresto);
export const isitAnyPresto = createIsAnyMethod(isitPresto);
export const isitNotPresto = createIsNotMethod(isitPresto);

export default isitPresto;
