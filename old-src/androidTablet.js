// is the device used an android tablet?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";
import isitAndroid from "./browser";

export default function isitAndroidTablet() {
    return isitBrowser() && isitAndroid() && !/mobile/i.test(navigatorInfo.userAgent);
}