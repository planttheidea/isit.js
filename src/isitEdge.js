// constants
import {
  EDGE_REGEXP,
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

const isEdgeTest = createRegExpTest(EDGE_REGEXP);

const isitEdge = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isEdgeTest(userAgent);
};

export const isitAllEdge = createIsAllMethod(isitEdge);
export const isitAnyEdge = createIsAnyMethod(isitEdge);
export const isitNotEdge = createIsNotMethod(isitEdge);

export default isitEdge;
