// is the device used a touch device?

import isitBrowser from "browser";

export default function isitTouchDevice() {
    /* eslint-disable */
    return isitBrowser() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
    /* eslint-enable */
}