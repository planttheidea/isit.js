

import {usZipCode} from "regexps";

export default function isitUsZipCode(obj) {
    return usZipCode.test(obj);
}