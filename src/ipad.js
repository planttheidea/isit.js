// is the device used an iPad?

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitIpad() {
    return isitBrowser() && /ipad/i.test(navigatorInfo.userAgent);
}