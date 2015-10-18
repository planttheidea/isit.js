

import {dateString} from "regexps";

export default function isDateString(obj) {
    return dateString.test(obj);
}