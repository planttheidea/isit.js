

import _isChar from "char";

export default function _isSpace(obj) {
    if (_isChar(obj)) {
        let charCode = obj.charCodeAt(0);

        return charCode > 0 && charCode < 14 || charCode === 32;
    }

    return false;
}