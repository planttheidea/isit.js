

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isAndroid() {
    return isBrowser() && /android/i.test(navigatorInfo.userAgent);
}