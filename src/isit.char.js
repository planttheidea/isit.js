

import isString from "isit.string";

export default function isChar(obj) {
    return isString(obj) && obj.length === 1;
}