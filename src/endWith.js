// is obj a string, and does it end with endStr?

import isitString from "./string";

export default function isitEndWith(obj, endStr) {
    return isitString(obj) && obj.indexOf(endStr) === obj.length - endStr.length;
}