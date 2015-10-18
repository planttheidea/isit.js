// is the device used a blackberry phone?

import {navigatorInfo} from "./utils";
import isitBrowser from "./browser";

export default function isitBlackberry() {
    return isitBrowser() && /blackberry/i.test(navigatorInfo.userAgent) || /BB10/i.test(navigatorInfo.userAgent);
}