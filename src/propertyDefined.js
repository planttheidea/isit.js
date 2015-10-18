

import isitObject from "object";
import isitString from "string";

export default function isitPropertyDefined(obj, prop) {
    return isitObject(obj) && isitString(prop) && prop in obj;
}