

import _isBrowser from "browser";

export default function _isTouchDevice() {
    /* eslint-disable */
    return _isBrowser() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
    /* eslint-enable */
}