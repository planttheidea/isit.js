// is obj a valid date string?

import {dateString} from "regexps";

export default function isitDateString(obj) {
    return dateString.test(obj);
}