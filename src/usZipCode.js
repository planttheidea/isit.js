// is obj a valid US Zip Code?

import {usZipCode} from "./regexps";

export default function isitUsZipCode(obj) {
    return usZipCode.test(obj);
}