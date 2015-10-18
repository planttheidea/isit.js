

import {email} from "regexps";

export default function isitEmail(obj) {
    return email.test(obj);
}