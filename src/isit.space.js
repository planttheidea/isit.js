

import isChar from "isit.char";

export default function isSpace(obj) {
    if (isChar(obj)) {
        let charCode = obj.charCodeAt(0);

        return charCode > 0 && charCode < 14 || charCode === 32;
    }

    return false;
}