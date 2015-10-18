

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isIpod() {
    return isBrowser() && /ipod/i.test(navigatorInfo.userAgent);
}