

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isWindows() {
    return isBrowser() && /win/i.test(navigatorInfo.appVersion);
}