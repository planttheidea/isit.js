

import _isString from "string";

export default function _isChar(obj) {
    return _isString(obj) && obj.length === 1;
}