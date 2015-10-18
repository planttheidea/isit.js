

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isTrident() {
    return isBrowser() && /trident/i.test(navigatorInfo.userAgent);
}