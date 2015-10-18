

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isIphone() {
    return _isBrowser() && /iphone/i.test(navigatorInfo.userAgent);
}