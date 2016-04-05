

import {eppPhone} from "./_regexps";

export default function isitEppPhone(obj) {
    return eppPhone.test(obj);
}