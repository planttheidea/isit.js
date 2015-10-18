

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isSafari() {
    return _isBrowser() && /safari/i.test(navigatorInfo.userAgent) && /apple computer/.test(navigatorInfo.vendor);
}