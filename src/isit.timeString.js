

import {timeString} from "regexps";

export default function isTimeString(obj) {
    return timeString.test(obj);
}