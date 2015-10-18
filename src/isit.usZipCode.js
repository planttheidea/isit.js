

import {usZipCode} from "regexps";

export default function isUsZipCode(obj) {
    return usZipCode.test(obj);
}