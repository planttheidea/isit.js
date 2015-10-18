

import {toString} from "utils";
import _isNaN from "nan";

export default function _isSameType(obj1, obj2) {
    if (_isNaN(obj1) || _isNaN(obj2)) {
        return _isNaN(obj1) === _isNaN(obj2);
    }

    return toString.call(obj1) === toString.call(obj2);
}