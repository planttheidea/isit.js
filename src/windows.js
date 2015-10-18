

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isWindows() {
    return _isBrowser() && /win/i.test(navigatorInfo.appVersion);
}