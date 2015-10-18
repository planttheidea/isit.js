

import {alphaNumeric} from "regexps";

export default function isAlphaNumeric(obj) {
    return alphaNumeric.test(obj);
}