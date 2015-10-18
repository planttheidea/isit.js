

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitChrome() {
    return isitBrowser() && /chrome|chromium/i.test(navigatorInfo.userAgent) && /google inc/.test(navigatorInfo.vendor);
}