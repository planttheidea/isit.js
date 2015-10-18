

import isBrowser from "isit.browser";

export default function isTouchDevice() {
    return isBrowser() && "ontouchstart" in window || "DocumentTouch" in window && document instanceof DocumentTouch;
}