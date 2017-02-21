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
 * @function isitAndroidPhone
 *
 * @param {*} object object to test
 * @returns {boolean} is the object an android phone
 */
const isitAndroidPhone = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isitAndroid({userAgent}) && isMobileTest(userAgent);
};

/**
 * @function isitAllAndroidPhone
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects an android phone
 */
export const isitAllAndroidPhone = createIsAllMethod(isitAndroidPhone);

/**
 * @function isitAnyAndroidPhone
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects an android phone
 */
export const isitAnyAndroidPhone = createIsAnyMethod(isitAndroidPhone);

/**
 * @function isitNotAndroidPhone
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not an android phone
 */
export const isitNotAndroidPhone = createIsNotMethod(isitAndroidPhone);

export default isitAndroidPhone;
