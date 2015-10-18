// is the device used an iPhone?

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitIphone() {
    return isitBrowser() && /iphone/i.test(navigatorInfo.userAgent);
}