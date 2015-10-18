

import _isObject from "object";
import _isString from "string";

export default function _isPropertyDefined(obj, prop) {
    return _isObject(obj) && _isString(prop) && prop in obj;
}