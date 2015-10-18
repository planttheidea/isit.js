

import {alphaNumeric} from "regexps";

export default function isitAlphaNumeric(obj) {
    return alphaNumeric.test(obj);
}