

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isLinux() {
    return _isBrowser() && /linux|x11/i.test(navigatorInfo.appVersion);
}