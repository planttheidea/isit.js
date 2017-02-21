// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const HAS_HTML_COLLECTION = typeof HTMLCollection === 'function';
const HAS_NODE_LIST = typeof NodeList === 'function';

const isitDomNodeList = (object) => {
  return (HAS_HTML_COLLECTION && object instanceof HTMLCollection) ||
    (HAS_NODE_LIST && object instanceof NodeList);
};

export const isitAllDomNodeList = createIsAllMethod(isitDomNodeList);
export const isitNotDomNodeList = createIsNotMethod(isitDomNodeList);
export const isitAnyDomNodeList = createIsAnyMethod(isitDomNodeList);

export default isitDomNodeList;
