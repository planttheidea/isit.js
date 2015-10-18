

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isBlackberry() {
    return isBrowser() && /blackberry/i.test(navigatorInfo.userAgent) || /BB10/i.test(navigatorInfo.userAgent);
}