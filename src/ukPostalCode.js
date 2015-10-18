

import {ukPostalCode} from "regexps";

export default function isitUkPostalCode(obj) {
    return ukPostalCode.test(obj);
}