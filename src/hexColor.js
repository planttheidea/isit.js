

import {hexColor} from "regexps";

export default function _isHexColor(obj) {
    return hexColor.test(obj);
}