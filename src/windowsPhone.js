

import {navigatorInfo} from "utils";
import isitBrowser from "browser";
import isitWindows from "windows";

export default function isitWindowsPhone() {
    return isitBrowser() && isitWindows() && /phone/i.test(navigatorInfo.userAgent);
}