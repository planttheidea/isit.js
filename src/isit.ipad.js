

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isIpad() {
    return isBrowser() && /ipad/i.test(navigatorInfo.userAgent);
}