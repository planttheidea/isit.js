

import {usZipCode} from "regexps";

export default function _isUsZipCode(obj) {
    return usZipCode.test(obj);
}