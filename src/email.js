

import {email} from "regexps";

export default function _isEmail(obj) {
    return email.test(obj);
}