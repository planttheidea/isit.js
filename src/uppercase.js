

import _isString from "string";

export default function _isUppercase(obj) {
    return _isString(obj) && obj === obj.toUpperCase();
}