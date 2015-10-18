// is the device used an android phone?

import {navigatorInfo} from "utils";
import isitBrowser from "browser";
import isitAndroid from "browser";

export default function isitAndroidPhone() {
    return isitBrowser() && isitAndroid() && /mobile/i.test(navigatorInfo.userAgent);
}