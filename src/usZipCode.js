// is obj a valid US Zip Code?

import {usZipCode} from "./_regexps";

export default function isitUSZipCode(obj) {
    return usZipCode.test(obj);
}