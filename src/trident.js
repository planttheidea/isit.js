

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitTrident() {
    return isitBrowser() && /trident/i.test(navigatorInfo.userAgent);
}