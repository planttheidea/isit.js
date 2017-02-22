// constants
import {
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isIpad from './ipad';
import isIpod from './ipod';
import isIphone from './iphone';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isIos = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isIphone(userAgent) || isIpad(userAgent) || isIpod(userAgent);
};

export const isAllIos = createIsAllMethod(isIos);
export const isAnyIos = createIsAnyMethod(isIos);
export const isNotIos = createIsNotMethod(isIos);

export default isIos;
