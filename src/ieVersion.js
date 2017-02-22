// compose
import {
  matchAny
} from './compose';

// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isIe from './ie';

// utils
import {
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const createCaseInsensitiveRegexp = (string) => {
  return new RegExp(string, 'i');
};

const createIsMatchingVersion = (version) => {
  const msieRegexp = createCaseInsensitiveRegexp(`msie ${version}`);
  const rvRegexp = createCaseInsensitiveRegexp(`rv:${version}`);

  return matchAny(createRegExpTest(msieRegexp), createRegExpTest(rvRegexp));
};

const isIeVersion = (version, {userAgent = USER_AGENT} = NAVIGATOR) => {
  const isMatchingVersion = createIsMatchingVersion(version);

  return !!version && isIe({userAgent}) && isMatchingVersion(userAgent);
};

export const isNotIeVersion = createIsNotMethod(isIeVersion);

export default isIeVersion;
