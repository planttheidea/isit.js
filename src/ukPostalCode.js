

import {ukPostalCode} from "regexps";

export default function _isUkPostalCode(obj) {
    return ukPostalCode.test(obj);
}