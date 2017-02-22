// constants
import {
  AFFIRMATIVE_REGEXP
} from './_internal/regexpConstants';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

/**
 * @function isAffirmative
 *
 * @param {*} object object to test
 * @returns {boolean} is the object affirmative
 */
const isAffirmative = createRegExpTest(AFFIRMATIVE_REGEXP);

/**
 * @function isAllAffirmative
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects affirmative
 */
export const isAllAffirmative = createIsAllMethod(isAffirmative);

/**
 * @function isAnyAffirmative
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects affirmative
 */
export const isAnyAffirmative = createIsAnyMethod(isAffirmative);

/**
 * @function isNotAffirmative
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not affirmative
 */
export const isNotAffirmative = createIsNotMethod(isAffirmative);

export default isAffirmative;
