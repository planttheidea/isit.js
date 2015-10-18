

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitBlink() {
    return isitBrowser() && /chrome/i.test(navigatorInfo.userAgent);
}