

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isFirefox() {
    return isBrowser() && /firefox/i.test(navigatorInfo.userAgent);
}