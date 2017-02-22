// types
import isExisty from './existy';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod
} from './_internal/functionUtils';

const isDomNode = (object) => {
  return isExisty(object) && object.nodeType > 0;
};

export const isAllDomNode = createIsAllMethod(isDomNode);
export const isNotDomNode = createIsNotMethod(isDomNode);
export const isAnyDomNode = createIsAnyMethod(isDomNode);

export default isDomNode;
