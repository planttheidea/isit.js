

import isArray from "isit.array";
import isString from "isit.string";

export default function isInclude(obj, substr) {
    return (isArray(obj) || isString(obj)) && obj.indexOf(substr) !== -1;
}