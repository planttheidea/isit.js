

import {navigatorInfo} from "utils";
import _isBrowser from "browser";
import _isAndroid from "browser";

export default function _isAndroidTablet() {
    return _isBrowser() && _isAndroid() && !/mobile/i.test(navigatorInfo.userAgent);
}