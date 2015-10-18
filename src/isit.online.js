

import isBrowser from "isit.browser";

export default function isOnline() {
    return isBrowser() && navigator.onLine;
}