

import {timeString} from "regexps";

export default function isitTimeString(obj) {
    return timeString.test(obj);
}