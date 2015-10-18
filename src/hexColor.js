// is obj a valid hex color?

import {hexColor} from "./_regexps";

export default function isitHexColor(obj) {
    return hexColor.test(obj);
}