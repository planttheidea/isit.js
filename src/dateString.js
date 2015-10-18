

import {dateString} from "regexps";

export default function isitDateString(obj) {
    return dateString.test(obj);
}