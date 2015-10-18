

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isIpod() {
    return _isBrowser() && /ipod/i.test(navigatorInfo.userAgent);
}