

import {nanpPhone} from "regexps";

export default function isitNanpPhone(obj) {
    return nanpPhone.test(obj);
}