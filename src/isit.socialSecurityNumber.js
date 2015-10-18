

import {socialSecurityNumber} from "regexps";

export default function isSocialSecurityNumber(obj) {
    return socialSecurityNumber.test(obj);
}