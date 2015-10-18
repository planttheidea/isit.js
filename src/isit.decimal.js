

import isNumber from "isit.number";

export default function isDecimal(obj) {
    return isNumber(obj) && obj % 1 !== 0;
}