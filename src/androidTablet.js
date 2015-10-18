// is the device used an android tablet?

import {navigatorInfo} from "utils";
import isitBrowser from "browser";
import isitAndroid from "browser";

export default function isitAndroidTablet() {
    return isitBrowser() && isitAndroid() && !/mobile/i.test(navigatorInfo.userAgent);
}