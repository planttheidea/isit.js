

import isString from "isit.string";

export default function isEndWith(obj, endStr) {
    return isString(obj) && str.indexOf(endStr) === str.length - endStr.length;
}