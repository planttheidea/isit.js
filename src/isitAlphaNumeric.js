// constants
import {
  ALPHA_NUMERIC_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

/**
 * @function isitAlphaNumeric
 *
 * @param {*} object object to test
 * @returns {boolean} is the object alpha-numeric
 */
const isitAlphaNumeric = createRegExpTest(ALPHA_NUMERIC_REGEXP);

/**
 * @function isitAllAlphaNumeric
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects alpha-numeric
 */
export const isitAllAlphaNumeric = createIsAllMethod(isitAlphaNumeric);

/**
 * @function isitAnyAlphaNumeric
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects alpha-numeric
 */
export const isitAnyAlphaNumeric = createIsAnyMethod(isitAlphaNumeric);

/**
 * @function isitNotAlphaNumeric
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not alpha-numeric
 */
export const isitNotAlphaNumeric = createIsNotMethod(isitAlphaNumeric);

export default isitAlphaNumeric;
