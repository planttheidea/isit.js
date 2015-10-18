

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isPresto() {
    return _isBrowser() && /opera/i.test(navigatorInfo.userAgent);
}