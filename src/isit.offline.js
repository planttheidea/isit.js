

import {not} from "helpers";
import isOnline from "isit.online";

export default function isOffline() {
    return not(isOnline);
}