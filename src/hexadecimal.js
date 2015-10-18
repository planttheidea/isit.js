// is obj a hexadecimal value?

import {hexadecimal} from "./regexps";

export default function isitHexadecimal(obj) {
    return hexadecimal.test(obj);
}