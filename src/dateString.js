

import {dateString} from "regexps";

export default function _isDateString(obj) {
    return dateString.test(obj);
}