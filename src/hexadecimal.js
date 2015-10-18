

import {hexadecimal} from "regexps";

export default function _isHexadecimal(obj) {
    return hexadecimal.test(obj);
}