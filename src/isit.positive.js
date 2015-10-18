

import isNumber from "isit.number";

export default function isPositive(obj) {
    return isNumber(obj) && obj > 0;
}