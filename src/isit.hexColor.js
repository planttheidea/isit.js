

import {hexColor} from "regexps";

export default function isHexColor(obj) {
    return hexColor.test(obj);
}