

import _isNumber from "number";

export default function _isNegative(obj) {
    return _isNumber(obj) && obj < 0;
}