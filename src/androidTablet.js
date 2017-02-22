// constants
import {
  MOBILE_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isAndroid from './android';

// utils
import {
  createIsAllMethod,
  createIsAnyMethod,
  createIsNotMethod,
  createRegExpTest
} from './_internal/functionUtils';

/**
 * @private
 *
 * @function isMobileTest
 *
 * @description
 * is the object matching the mobile userAgent
 *
 * @param {*} object object to test
 * @returns {boolean} does the userAgent match the regexp
 */
const isMobileTest = createRegExpTest(MOBILE_REGEXP);

/**
 * @function isAndroidTablet
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android tablet
 */
const isAndroidTablet = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isAndroid({userAgent}) && !isMobileTest(userAgent);
};

/**
 * @function isAllAndroidTablet
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android tablet
 */
export const isAllAndroidTablet = createIsAllMethod(isAndroidTablet);

/**
 * @function isAnyAndroidTablet
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android tablet
 */
export const isAnyAndroidTablet = createIsAnyMethod(isAndroidTablet);

/**
 * @function isNotAndroidTablet
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android tablet
 */
export const isNotAndroidTablet = createIsNotMethod(isAndroidTablet);

export default isAndroidTablet;
