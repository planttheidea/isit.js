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

const isitOpera = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isOperaModernTest(userAgent) || isOperaLegacyTest(userAgent);
};

export const isitAllOpera = createIsAllMethod(isitOpera);
export const isitAnyOpera = createIsAnyMethod(isitOpera);
export const isitNotOpera = createIsNotMethod(isitOpera);

export default isitOpera;
