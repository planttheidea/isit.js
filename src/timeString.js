

import {timeString} from "regexps";

export default function _isTimeString(obj) {
    return timeString.test(obj);
}