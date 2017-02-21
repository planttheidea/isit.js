// constants
import {
  APP_VERSION,
  LINUX_REGEXP,
  NAVIGATOR,
  UNIX_REGEXP
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isLinuxTest = createRegExpTest(LINUX_REGEXP);
const isUnixTest = createRegExpTest(UNIX_REGEXP);

const isitLinux = ({appVersion = APP_VERSION} = NAVIGATOR) => {
  return isLinuxTest(appVersion) || isUnixTest(appVersion);
};

export const isitAllLinux = createIsAllMethod(isitLinux);
export const isitAnyLinux = createIsAnyMethod(isitLinux);
export const isitNotLinux = createIsNotMethod(isitLinux);

export default isitLinux;
