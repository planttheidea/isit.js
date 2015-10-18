// is the device used a tablet running on Windows?

import {not} from "./_interfaces";
import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";
import isitWindows from "./windows";
import isitWindowsPhone from "./windowsPhone";

export default function isitWindowsTablet() {
    return isitBrowser() && isitWindows() && not(isitWindowsPhone)() && /touch/i.test(navigatorInfo.userAgent);
}