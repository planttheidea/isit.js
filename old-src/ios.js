// is the device used running on iOS?

import isitIpad from "./ipad";
import isitIphone from "./iphone";
import isitIpod from "./ipod";

export default function isitIOS() {
    return isitIpad() || isitIphone() || isitIpod();
}