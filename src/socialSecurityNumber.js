

import {socialSecurityNumber} from "regexps";

export default function _isSocialSecurityNumber(obj) {
    return socialSecurityNumber.test(obj);
}