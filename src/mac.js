// constants
import {
  APP_VERSION,
  MAC_REGEXP,
  NAVIGATOR
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isMacTest = createRegExpTest(MAC_REGEXP);

const isMac = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isMacTest(appVersion);
};

export const isAllMac = createIsAllMethod(isMac);
export const isAnyMac = createIsAnyMethod(isMac);
export const isNotMac = createIsNotMethod(isMac);

export default isMac;
