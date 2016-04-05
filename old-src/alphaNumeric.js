// is obj alphanumeric?

import {alphaNumeric} from "./_regexps";

export default function isitAlphaNumeric(obj) {
    return alphaNumeric.test(obj);
}