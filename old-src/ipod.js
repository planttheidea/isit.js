// is the device used an iPod?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitIpod() {
    return isitBrowser() && /ipod/i.test(navigatorInfo.userAgent);
}