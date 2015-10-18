

import _isNumber from "number";

export default function _isPositive(obj) {
    return _isNumber(obj) && obj > 0;
}