// is obj a valid Canada Postal Code?

import {caPostalCode} from "regexps";

export default function isitCaPostalCode(obj) {
    return caPostalCode.test(obj);
}