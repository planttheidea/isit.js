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
 * @function isitAffirmative
 *
 * @param {*} object object to test
 * @returns {boolean} is the object affirmative
 */
const isitAffirmative = createRegExpTest(AFFIRMATIVE_REGEXP);

/**
 * @function isitAllAffirmative
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects affirmative
 */
export const isitAllAffirmative = createIsAllMethod(isitAffirmative);

/**
 * @function isitAnyAffirmative
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects affirmative
 */
export const isitAnyAffirmative = createIsAnyMethod(isitAffirmative);

/**
 * @function isitNotAffirmative
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not affirmative
 */
export const isitNotAffirmative = createIsNotMethod(isitAffirmative);

export default isitAffirmative;
