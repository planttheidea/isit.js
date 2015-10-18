// is the browser used Opera?

import {navigatorInfo} from "./utils";
import isitBrowser from "./browser";

export default function isitOpera() {
    return isitBrowser() && /^opera/i.test(navigatorInfo.userAgent) || /OPR/.test(navigatorInfo.userAgent);
}