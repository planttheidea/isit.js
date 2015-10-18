

import {eppPhone} from "regexps";

export default function isEppPhone(obj) {
    return eppPhone.test(obj);
}