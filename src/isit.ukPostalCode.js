

import {ukPostalCode} from "regexps";

export default function isUkPostalCode(obj) {
    return ukPostalCode.test(obj);
}