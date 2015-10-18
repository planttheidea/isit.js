

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isBlink() {
    return isBrowser() && /chrome/i.test(navigatorInfo.userAgent);
}