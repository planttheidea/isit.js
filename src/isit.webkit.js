

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isWebkit() {
    return isBrowser() && /applewebkit/i.test(navigatorInfo.userAgent);
}