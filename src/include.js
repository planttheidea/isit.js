

import isitArray from "array";
import isitString from "string";

export default function isitInclude(obj, substr) {
    return (isitArray(obj) || isitString(obj)) && obj.indexOf(substr) !== -1;
}