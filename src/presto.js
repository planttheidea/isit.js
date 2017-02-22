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

const isPresto = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isOperaLegacyTest(userAgent);
};

export const isAllPresto = createIsAllMethod(isPresto);
export const isAnyPresto = createIsAnyMethod(isPresto);
export const isNotPresto = createIsNotMethod(isPresto);

export default isPresto;
