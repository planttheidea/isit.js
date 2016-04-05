// is obj a valid UK Postal Code?

import {ukPostCode} from "./_regexps";

export default function isitUKPostCode(obj) {
    return ukPostCode.test(obj);
}