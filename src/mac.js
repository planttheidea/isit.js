

import {navigatorInfo} from "utils";
import isitBrowser from "browser";

export default function isitMac() {
    return isitBrowser() && /mac/i.test(navigatorInfo.appVersion);
}