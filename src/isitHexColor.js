// constants
import {
  HEX_COLOR_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

const isitHexColor = createRegExpTest(HEX_COLOR_REGEXP);

export const isitAllHexColor = createIsAllMethod(isitHexColor);
export const isitAnyHexColor = createIsAnyMethod(isitHexColor);
export const isitNotHexColor = createIsNotMethod(isitHexColor);

export default isitHexColor;
