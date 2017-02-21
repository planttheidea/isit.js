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

const isitMac = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isMacTest(appVersion);
};

export const isitAllMac = createIsAllMethod(isitMac);
export const isitAnyMac = createIsAnyMethod(isitMac);
export const isitNotMac = createIsNotMethod(isitMac);

export default isitMac;
