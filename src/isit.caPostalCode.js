

import {caPostalCode} from "regexps";

export default function isCaPostalCode(obj) {
    return caPostalCode.test(obj);
}