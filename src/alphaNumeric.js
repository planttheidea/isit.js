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
 * @function isAlphaNumeric
 *
 * @param {*} object object to test
 * @returns {boolean} is the object alpha-numeric
 */
const isAlphaNumeric = createRegExpTest(ALPHA_NUMERIC_REGEXP);

/**
 * @function isAllAlphaNumeric
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects alpha-numeric
 */
export const isAllAlphaNumeric = createIsAllMethod(isAlphaNumeric);

/**
 * @function isAnyAlphaNumeric
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects alpha-numeric
 */
export const isAnyAlphaNumeric = createIsAnyMethod(isAlphaNumeric);

/**
 * @function isNotAlphaNumeric
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not alpha-numeric
 */
export const isNotAlphaNumeric = createIsNotMethod(isAlphaNumeric);

export default isAlphaNumeric;
