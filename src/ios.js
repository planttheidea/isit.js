// is the device used running on iOS?

import isitIpad from "ipad";
import isitIphone from "iphone";
import isitIpod from "ipod";

export default function isitIos() {
    return isitIpad() || isitIphone() || isitIpod();
}