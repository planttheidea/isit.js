

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isIphone() {
    return isBrowser() && /iphone/i.test(navigatorInfo.userAgent);
}