

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";
import isAndroid from "isit.browser";

export default function isAndroidPhone() {
    return isBrowser() && isAndroid() && /mobile/i.test(navigatorInfo.userAgent);
}