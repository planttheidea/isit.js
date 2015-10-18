

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isSafari() {
    return isBrowser() && /safari/i.test(navigatorInfo.userAgent) && /apple computer/.test(navigatorInfo.vendor);
}