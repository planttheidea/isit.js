

import _isObject from "object";

export default function _isDomNode(obj) {
    return _isObject(obj) && obj.nodeType > 0;
}