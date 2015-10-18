

import isAndroidTablet from "isit.androidTablet";
import isBrowser from "isit.browser";
import isIpad from "isit.ipad";
import isWindowsTablet from "isit.windowsTablet";

export default function isTablet() {
    return isBrowser() && (isIpad() || isAndroidTablet() || isWindowsTablet());
}