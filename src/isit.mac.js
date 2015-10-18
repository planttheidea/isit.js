

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isMac() {
    return isBrowser() && /mac/i.test(navigatorInfo.appVersion);
}