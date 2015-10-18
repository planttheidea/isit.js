// is obj a string and does it start with startStr?

import isitString from "./string";

export default function isitStartWith(obj, startStr) {
    return isitString(obj) && obj.indexOf(startStr) === 0;
}