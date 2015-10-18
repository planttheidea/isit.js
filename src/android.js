

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isAndroid() {
    return _isBrowser() && /android/i.test(navigatorInfo.userAgent);
}