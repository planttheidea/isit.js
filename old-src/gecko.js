// does the browser used render via gecko?

import navigatorInfo from "./_navigator";
import isitBrowser from "./browser";

export default function isitGecko() {
    return isitBrowser() && /gecko/i.test(navigatorInfo.userAgent);
}