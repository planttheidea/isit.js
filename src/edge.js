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

const isEdge = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isEdgeTest(userAgent);
};

export const isAllEdge = createIsAllMethod(isEdge);
export const isAnyEdge = createIsAnyMethod(isEdge);
export const isNotEdge = createIsNotMethod(isEdge);

export default isEdge;
