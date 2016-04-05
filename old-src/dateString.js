// is obj a valid date string?

import {dateString} from "./_regexps";

export default function isitDateString(obj) {
    return dateString.test(obj);
}