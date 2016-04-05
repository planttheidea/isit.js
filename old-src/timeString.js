// is obj a valid time string?

import {timeString} from "./_regexps";

export default function isitTimeString(obj) {
    return timeString.test(obj);
}