// is the browser used Opera?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitOpera() {
    return isitBrowser() && /^opera/i.test(navigatorInfo.userAgent) || /OPR/.test(navigatorInfo.userAgent);
}