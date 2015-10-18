

import {navigatorInfo} from "utils";
import _isBrowser from "browser";
import _isWindows from "windows";

export default function _isWindowsPhone() {
    return _isBrowser() && _isWindows() && /phone/i.test(navigatorInfo.userAgent);
}