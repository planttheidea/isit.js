

import {not} from "helpers";
import {navigatorInfo} from "utils";
import isitBrowser from "browser";
import isitWindows from "windows";
import isitWindowsPhone from "windowsPhone";

export default function isitWindowsTablet() {
    return isitBrowser() && isitWindows() && not(isitWindowsPhone()) && /touch/i.test(navigatorInfo.userAgent);
}