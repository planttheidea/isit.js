

import _isIpad from "ipad";
import _isIphone from "iphone";
import _isIpod from "ipod";

export default function _isIos() {
    return _isIpad() || _isIphone() || _isIpod();
}