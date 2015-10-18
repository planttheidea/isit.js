// is obj a valid email address?

import {email} from "regexps";

export default function isitEmail(obj) {
    return email.test(obj);
}