

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isOpera() {
    return _isBrowser() && /^opera/i.test(navigatorInfo.userAgent) || /OPR/.test(navigatorInfo.userAgent);
}