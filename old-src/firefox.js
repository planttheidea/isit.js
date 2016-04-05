// is the browser used firefox?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitFirefox() {
    return isitBrowser() && /firefox/i.test(navigatorInfo.userAgent);
}