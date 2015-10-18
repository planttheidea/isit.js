

import isObject from "isit.object";
import isString from "isit.string";

export default function isPropertyDefined(obj, prop) {
    return isObject(obj) && isString(prop) && prop in obj;
}