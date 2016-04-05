// is the device used running on Windows?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitWindows() {
    return isitBrowser() && /win/i.test(navigatorInfo.appVersion);
}