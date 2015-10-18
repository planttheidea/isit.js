// is the device used a Mac?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitMac() {
    return isitBrowser() && /mac/i.test(navigatorInfo.appVersion);
}