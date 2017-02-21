// constants
import {
  HAS_WINDOW
} from './_internal/environmentConstants';

// utils
import {
  createIsNotMethod
} from './_internal/functionUtils';

/**
 * @function isitTouchDevice
 *
 * @returns {boolean} is the device a touch device
 */
const isitTouchDevice = () => {
  return HAS_WINDOW && ('ontouchstart' in window || !!(window.DocumentTouch && document instanceof window.DocumentTouch));
};

/**
 * @function isitNotTouchDevice
 *
 * @returns {boolean} is the device not a touch device
 */
export const isitNotTouchDevice = createIsNotMethod(isitTouchDevice);

export default isitTouchDevice;
