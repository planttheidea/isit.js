

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isMac() {
    return _isBrowser() && /mac/i.test(navigatorInfo.appVersion);
}