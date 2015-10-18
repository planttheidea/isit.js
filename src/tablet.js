

import _isAndroidTablet from "androidTablet";
import _isBrowser from "browser";
import _isIpad from "ipad";
import _isWindowsTablet from "windowsTablet";

export default function _isTablet() {
    return _isBrowser() && (_isIpad() || _isAndroidTablet() || _isWindowsTablet());
}