

import isitBrowser from "browser";
import isitMobile from "mobile";
import isitTablet from "tablet";

export default function isitDesktop() {
    return isitBrowser() && !isitMobile() && !isitTablet();
}