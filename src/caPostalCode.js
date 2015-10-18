

import {caPostalCode} from "regexps";

export default function _isCaPostalCode(obj) {
    return caPostalCode.test(obj);
}