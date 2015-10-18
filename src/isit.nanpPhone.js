

import {nanpPhone} from "regexps";

export default function isNanpPhone(obj) {
    return nanpPhone.test(obj);
}