

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isPresto() {
    return isBrowser() && /opera/i.test(navigatorInfo.userAgent);
}