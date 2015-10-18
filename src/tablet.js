

import isitAndroidTablet from "androidTablet";
import isitBrowser from "browser";
import isitIpad from "ipad";
import isitWindowsTablet from "windowsTablet";

export default function isitTablet() {
    return isitBrowser() && (isitIpad() || isitAndroidTablet() || isitWindowsTablet());
}