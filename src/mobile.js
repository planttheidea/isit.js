

import _isAndroidPhone from "androidPhone";
import _isBlackberry from "blackberry";
import _isBrowser from "browser";
import _isIphone from "iphone";
import _isIpod from "ipod";
import _isWindowsPhone from "windowsPhone";

export default function _isMobile() {
    return _isBrowser() && (_isIphone() || _isAndroidPhone() || _isIpod() || _isWindowsPhone() || _isBlackberry());
}