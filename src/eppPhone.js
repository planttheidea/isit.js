

import {eppPhone} from "regexps";

export default function _isEppPhone(obj) {
    return eppPhone.test(obj);
}