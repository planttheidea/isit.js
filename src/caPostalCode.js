// is obj a valid Canada Postal Code?

import {caPostalCode} from "./_regexps";

export default function isitCaPostalCode(obj) {
    return caPostalCode.test(obj);
}