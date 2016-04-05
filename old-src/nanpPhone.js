

import {nanpPhone} from "./_regexps";

export default function isitNanpPhone(obj) {
    return nanpPhone.test(obj);
}