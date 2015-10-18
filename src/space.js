

import isitChar from "char";

export default function isitSpace(obj) {
    if (isitChar(obj)) {
        let charCode = obj.charCodeAt(0);

        return charCode > 0 && charCode < 14 || charCode === 32;
    }

    return false;
}