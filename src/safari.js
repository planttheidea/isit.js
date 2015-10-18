// is the browser used Safari?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitSafari() {
    return isitBrowser() && /safari/i.test(navigatorInfo.userAgent) && /apple computer/.test(navigatorInfo.vendor);
}