

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isIe(version) {
    if (!_isBrowser()) {
        return false;
    }

    if (!version) {
        return /msie/.test(navigatorInfo.userAgent) || !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    if (version >= 11) {
        return !(window.ActiveXObject) && "ActiveXObject" in window;
    }

    return new RegExp("msie " + version).test(navigatorInfo.userAgent);
}