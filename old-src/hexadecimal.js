// is obj a hexadecimal value?

import {hexadecimal} from "./_regexps";

export default function isitHexadecimal(obj) {
    return hexadecimal.test(obj);
}