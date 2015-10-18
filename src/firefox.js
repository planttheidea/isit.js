

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isFirefox() {
    return _isBrowser() && /firefox/i.test(navigatorInfo.userAgent);
}