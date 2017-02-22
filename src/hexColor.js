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

const isHexColor = createRegExpTest(HEX_COLOR_REGEXP);

export const isAllHexColor = createIsAllMethod(isHexColor);
export const isAnyHexColor = createIsAnyMethod(isHexColor);
export const isNotHexColor = createIsNotMethod(isHexColor);

export default isHexColor;
