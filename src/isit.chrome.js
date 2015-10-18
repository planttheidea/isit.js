

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isChrome() {
    return isBrowser() && /chrome|chromium/i.test(navigatorInfo.userAgent) && /google inc/.test(navigatorInfo.vendor);
}