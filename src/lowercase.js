

import _isString from "string";

export default function _isLowercase(obj) {
    return _isString(obj) && obj === obj.toLowerCase();
}