// is obj a valid date string?

import {isoDateString} from "./_regexps";

export default function isitISODateString(obj) {
    return isoDateString.test(obj);
}