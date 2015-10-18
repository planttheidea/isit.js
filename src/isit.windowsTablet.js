

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";
import isWindows from "isit.windows";
import isWindowsPhone from "isit.windowsPhone";

export default function isWindowsTablet() {
    return isBrowser() && isWindows() && not(isWindowPhone()) && /touch/i.test(navigatorInfo.userAgent);
}