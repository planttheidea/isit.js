

import _isNumber from "number";

export default function _isOdd(obj) {
    return _isNumber(obj) && obj % 2 !== 0;
}