// is obj a valid social security number?

import {socialSecurityNumber} from "regexps";

export default function isitSocialSecurityNumber(obj) {
    return socialSecurityNumber.test(obj);
}