

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitIpod() {
    return isitBrowser() && /ipod/i.test(navigatorInfo.userAgent);
}