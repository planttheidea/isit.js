

import _isNumber from "number";

export default function _isInteger(obj) {
    return _isNumber(obj) && obj % 1 === 0;
}