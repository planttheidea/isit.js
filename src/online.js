

import _isBrowser from "browser";

export default function _isOnline() {
    return _isBrowser() && navigator.onLine;
}