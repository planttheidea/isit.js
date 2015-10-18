

import isitString from "string";

export default function isitStartWith(obj, startStr) {
    return isitString(obj) && obj.indexOf(startStr) === 0;
}