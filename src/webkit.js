

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitWebkit() {
    return isitBrowser() && /applewebkit/i.test(navigatorInfo.userAgent);
}