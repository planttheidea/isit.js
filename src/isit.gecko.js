

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";

export default function isGecko() {
    return isBrowser() && /gecko/i.test(navigatorInfo.userAgent);
}