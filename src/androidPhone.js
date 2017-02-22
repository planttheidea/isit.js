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
 * @function isAndroidPhone
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android phone
 */
const isAndroidPhone = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isAndroid({userAgent}) && isMobileTest(userAgent);
};

/**
 * @function isAllAndroidPhone
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android phone
 */
export const isAllAndroidPhone = createIsAllMethod(isAndroidPhone);

/**
 * @function isAnyAndroidPhone
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects an android phone
 */
export const isAnyAndroidPhone = createIsAnyMethod(isAndroidPhone);

/**
 * @function isNotAndroidPhone
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not an android phone
 */
export const isNotAndroidPhone = createIsNotMethod(isAndroidPhone);

export default isAndroidPhone;
