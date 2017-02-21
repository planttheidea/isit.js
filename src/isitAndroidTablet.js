// constants
import {
  MOBILE_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

// environment
import isitAndroid from './isitAndroid';

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
 * @function isitAndroidTablet
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android tablet
 */
const isitAndroidTablet = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitAndroid({userAgent}) && !isMobileTest(userAgent);
};

/**
 * @function isitAllAndroidTablet
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android tablet
 */
export const isitAllAndroidTablet = createIsAllMethod(isitAndroidTablet);

/**
 * @function isitAnyAndroidTablet
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android tablet
 */
export const isitAnyAndroidTablet = createIsAnyMethod(isitAndroidTablet);

/**
 * @function isitNotAndroidTablet
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android tablet
 */
export const isitNotAndroidTablet = createIsNotMethod(isitAndroidTablet);

export default isitAndroidTablet;
