// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const HAS_HTML_COLLECTION = typeof HTMLCollection === 'function';
const HAS_NODE_LIST = typeof NodeList === 'function';

const isDomNodeList = (object) => {
  return (HAS_HTML_COLLECTION && object instanceof HTMLCollection) ||
    (HAS_NODE_LIST && object instanceof NodeList);
};

export const isAllDomNodeList = createIsAllMethod(isDomNodeList);
export const isNotDomNodeList = createIsNotMethod(isDomNodeList);
export const isAnyDomNodeList = createIsAnyMethod(isDomNodeList);

export default isDomNodeList;
