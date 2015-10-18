

import _isArray from "array";
import _isString from "string";

export default function _isInclude(obj, substr) {
    return (_isArray(obj) || _isString(obj)) && obj.indexOf(substr) !== -1;
}