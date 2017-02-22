// constants
import {
  OPERA_LEGACY_REGEXP,
  OPERA_MODERN_REGEXP,
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
const isOperaModernTest = createRegExpTest(OPERA_MODERN_REGEXP);

const isOpera = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isOperaModernTest(userAgent) || isOperaLegacyTest(userAgent);
};

export const isAllOpera = createIsAllMethod(isOpera);
export const isAnyOpera = createIsAnyMethod(isOpera);
export const isNotOpera = createIsNotMethod(isOpera);

export default isOpera;
