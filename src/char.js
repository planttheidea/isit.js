

import isitString from "string";

export default function isitChar(obj) {
    return isitString(obj) && obj.length === 1;
}