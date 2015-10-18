

import {navigatorInfo} from "utils";
import _isBrowser from "browser";

export default function _isWebkit() {
    return _isBrowser() && /applewebkit/i.test(navigatorInfo.userAgent);
}