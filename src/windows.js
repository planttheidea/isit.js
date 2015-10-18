

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitWindows() {
    return isitBrowser() && /win/i.test(navigatorInfo.appVersion);
}