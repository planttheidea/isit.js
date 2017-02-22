// constants
import {
  HTML_REGEXP
} from './_internal/stringConstants';

// types
import isString from './string';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isHtmlTest = createRegExpTest(HTML_REGEXP);

const isHtml = (object) => {
  return isString(object) && isHtmlTest(object);
};

export const isAllHtml = createIsAllMethod(isHtml);
export const isAnyHtml = createIsAnyMethod(isHtml);
export const isNotHtml = createIsNotMethod(isHtml);

export default isHtml;
