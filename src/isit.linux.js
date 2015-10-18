

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isLinux() {
    return isBrowser() && /linux/i.test(navigatorInfo.appVersion);
}