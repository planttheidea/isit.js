// is the device used running on Linux?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitLinux() {
    return isitBrowser() && /linux|x11/i.test(navigatorInfo.appVersion);
}