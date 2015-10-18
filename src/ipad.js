

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isIpad() {
    return _isBrowser() && /ipad/i.test(navigatorInfo.userAgent);
}