

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isBlink() {
    return _isBrowser() && /chrome/i.test(navigatorInfo.userAgent);
}