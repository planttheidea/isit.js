

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isChrome() {
    return _isBrowser() && /chrome|chromium/i.test(navigatorInfo.userAgent) && /google inc/.test(navigatorInfo.vendor);
}