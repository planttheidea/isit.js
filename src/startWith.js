

import _isString from "string";

export default function _isStartWith(obj, startStr) {
    return _isString(obj) && obj.indexOf(startStr) === 0;
}