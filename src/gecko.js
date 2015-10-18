

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isGecko() {
    return _isBrowser() && /gecko/i.test(navigatorInfo.userAgent);
}