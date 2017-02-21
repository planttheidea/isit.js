// constants
import {
  ANDROID_REGEXP,
  NAVIGATOR,
  USER_AGENT
} from './_internal/environmentConstants';

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
 * @function isAndroidTest
 *
 * @description
 * is the object matching the android userAgent
 *
 * @param {*} object object to test
 * @returns {boolean} does the userAgent match the regexp
 */
const isAndroidTest = createRegExpTest(ANDROID_REGEXP);

/**
 * @function isitAndroid
 *
 * @param {*} object object to test
 * @returns {boolean} is the object android
 */
const isitAndroid = ({userAgent = USER_AGENT} = NAVIGATOR) => {
  return isAndroidTest(userAgent);
};

/**
 * @function isitAllAndroid
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are all of the objects android
 */
export const isitAllAndroid = createIsAllMethod(isitAndroid);

/**
 * @function isitAnyAndroid
 *
 * @param {...Array<*>} objects objects to test
 * @returns {boolean} are any of the objects android
 */
export const isitAnyAndroid = createIsAnyMethod(isitAndroid);

/**
 * @function isitNotAndroid
 *
 * @param {*} object object to test
 * @returns {boolean} is the object not android
 */
export const isitNotAndroid = createIsNotMethod(isitAndroid);

export default isitAndroid;
