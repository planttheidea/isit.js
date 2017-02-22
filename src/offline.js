// constants
import {
  NAVIGATOR
} from './_internal/environmentConstants';

// environment
import isOnline from './online';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isOffline = (navigator = NAVIGATOR) => {
  return !isOnline(navigator);
};

export const isAllOffline = createIsAllMethod(isOffline);
export const isAnyOffline = createIsAnyMethod(isOffline);
export const isNotOffline = createIsNotMethod(isOffline);

export default isOffline;
