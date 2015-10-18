

import isitBrowser from "./browser";

export default function isitOnline() {
    return isitBrowser() && navigator.onLine;
}