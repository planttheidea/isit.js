

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isTrident() {
    return _isBrowser() && /trident/i.test(navigatorInfo.userAgent);
}