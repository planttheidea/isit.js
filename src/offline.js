

import isitOnline from "online";

export default function isitOffline() {
    return !isitOnline();
}