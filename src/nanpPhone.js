

import {nanpPhone} from "regexps";

export default function _isNanpPhone(obj) {
    return nanpPhone.test(obj);
}