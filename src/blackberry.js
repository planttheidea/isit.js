

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isBlackberry() {
    return _isBrowser() && /blackberry/i.test(navigatorInfo.userAgent) || /BB10/i.test(navigatorInfo.userAgent);
}