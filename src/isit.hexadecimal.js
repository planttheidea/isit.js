

import {hexadecimal} from "regexps";

export default function isHexadecimal(obj) {
    return hexadecimal.test(obj);
}