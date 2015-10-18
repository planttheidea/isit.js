

import _isArray from "array";
import _isArguments from "arguments";
import _isObject from "object";

export default function _isEmpty(obj) {
    if (_isObject(obj)) {
        let num = Object.getOwnPropertyNames(obj).length;

        return num === 0 || num === 1 && _isArray(obj) || num === 2 && _isArguments(obj);
    }

    return obj === "";
}