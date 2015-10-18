

import _isBrowser from "browser";
import _isMobile from "mobile";
import _isTablet from "tablet";

export default function _isDesktop() {
    return _isBrowser() && !_isMobile() && !_isTablet();
}