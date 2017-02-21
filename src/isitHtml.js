// constants
import {
  HTML_REGEXP
} from './_internal/stringConstants';

// types
import isitString from './isitString';

// utils
import {
  createIsAllMethod,
  createIsNotMethod,
  createIsAnyMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isHtmlTest = createRegExpTest(HTML_REGEXP);

const isitHtml = (object) => {
  return isitString(object) && isHtmlTest(object);
};

export const isitAllHtml = createIsAllMethod(isitHtml);
export const isitAnyHtml = createIsAnyMethod(isitHtml);
export const isitNotHtml = createIsNotMethod(isitHtml);

export default isitHtml;
