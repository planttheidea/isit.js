// does the browser used render via Presto?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitPresto() {
    return isitBrowser() && /opera/i.test(navigatorInfo.userAgent);
}