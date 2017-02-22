// constants
import {
  NAVIGATOR
} from './_internal/environmentConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod
} from './_internal/functionUtils';

const isOnline = ({onLine} = NAVIGATOR) => {
  return !!onLine;
};

export const isAllOnline = createIsAllMethod(isOnline);
export const isAnyOnline = createIsAnyMethod(isOnline);
export const isNotOnline = createIsNotMethod(isOnline);

export default isOnline;
