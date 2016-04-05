// is the browser used chrome?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitChrome() {
    return isitBrowser() && /chrome|chromium/i.test(navigatorInfo.userAgent) && /google inc/.test(navigatorInfo.vendor);
}