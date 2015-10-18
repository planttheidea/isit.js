

import {navigatorInfo} from "utils";
import isBrowser from "isit.browser";
import isMobile from "isit.mobile";
import isTablet from "isit.tablet";

export default function isDesktop() {
    return isBrowser() && !isMobile() && !isTablet();
}