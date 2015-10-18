

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";
import isWindows from "isit.windows";

export default function isWindowsPhone() {
    return isBrowser() && isWindows() && /phone/i.test(navigatorInfo.userAgent);
}