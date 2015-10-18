

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitAndroid() {
    return isitBrowser() && /android/i.test(navigatorInfo.userAgent);
}