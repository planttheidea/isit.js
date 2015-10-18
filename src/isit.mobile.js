

import isAndroidPhone from "isit.androidPhone";
import isBlackberry from "isit.blackberry";
import isBrowser from "isit.browser";
import isIphone from "isit.iphone";
import isIpod from "isit.ipod";
import isWindowsPhone from "isit.windowsPhone";

export default function isMobile() {
    return isBrowser() && (isIphone() || isAndroidPhone() || isIpod() || isWindowsPhone() || isBlackberry());
}