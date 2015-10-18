

import isNumber from "isit.number";

export default function isNegative(obj) {
    return isNumber(obj) && obj < 0;
}