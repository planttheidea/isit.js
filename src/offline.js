

import _isOnline from "online";

export default function _isOffline() {
    return !_isOnline();
}