

import {eppPhone} from "./regexps";

export default function isitEppPhone(obj) {
    return eppPhone.test(obj);
}