

import {email} from "regexps";

export default function isEmail(obj) {
    return email.test(obj);
}