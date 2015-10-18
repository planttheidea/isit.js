// is obj either an array or a string, and does substr exist in it?
// NOTE: this can be used as an alias for .inArray()

import isitArray from "array";
import isitString from "string";

export default function isitInclude(obj, substr) {
    return (isitArray(obj) || isitString(obj)) && obj.indexOf(substr) !== -1;
}