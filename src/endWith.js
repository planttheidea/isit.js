

import _isString from "string";

export default function _isEndWith(obj, endStr) {
    return _isString(obj) && obj.indexOf(endStr) === obj.length - endStr.length;
}