// constants
import {
  HAS_WINDOW
} from './_internal/environmentConstants';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @function isTouchDevice
 *
 * @returns {boolean} is the device a touch device
 */
const isTouchDevice = () => {
  return HAS_WINDOW && ('ontouchstart' in window || !!(window.DocumentTouch && document instanceof window.DocumentTouch));
};

/**
 * @function isNotTouchDevice
 *
 * @returns {boolean} is the device not a touch device
 */
export const isNotTouchDevice = createIsNotMethod(isTouchDevice);

export default isTouchDevice;
