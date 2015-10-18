

import {not} from "helpers";
import {navigatorInfo} from "utils";
import _isBrowser from "browser";
import _isWindows from "windows";
import _isWindowsPhone from "windowsPhone";

export default function _isWindowsTablet() {
    return _isBrowser() && _isWindows() && not(_isWindowsPhone()) && /touch/i.test(navigatorInfo.userAgent);
}