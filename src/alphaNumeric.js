

import {alphaNumeric} from "regexps";

export default function _isAlphaNumeric(obj) {
    return alphaNumeric.test(obj);
}