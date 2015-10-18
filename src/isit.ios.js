

import isIpad from "isit.ipad";
import isIphone from "isit.iphone";
import isIpod from "isit.ipod";

export default function isIos() {
    return isIpad() || isIphone() || isIpod();
}