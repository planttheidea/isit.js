

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isOpera() {
    return isBrowser() && /^opera/i.test(navigatorInfo.userAgent) || /OPR/.test(navigatorInfo.userAgent);
}