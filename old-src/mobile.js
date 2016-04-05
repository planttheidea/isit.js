// is the device used a mobile phone?

import isitAndroidPhone from "./androidPhone";
import isitBlackberry from "./blackberry";
import isitBrowser from "./browser";
import isitIphone from "./iphone";
import isitIpod from "./ipod";
import isitWindowsPhone from "./windowsPhone";

export default function isitMobile() {
    return isitBrowser() && (isitIphone() || isitAndroidPhone() || isitIpod() || isitWindowsPhone() || isitBlackberry());
}